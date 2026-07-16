# `networkInterfaceAttachment` Submodule <a name="`networkInterfaceAttachment` Submodule" id="@cdktn/provider-aws.networkInterfaceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceAttachmentA <a name="NetworkInterfaceAttachmentA" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment aws_network_interface_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface_attachment.NetworkInterfaceAttachmentA;

NetworkInterfaceAttachmentA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deviceIndex(java.lang.Number)
    .instanceId(java.lang.String)
    .networkInterfaceId(java.lang.String)
//  .id(java.lang.String)
//  .networkCardIndex(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#device_index NetworkInterfaceAttachmentA#device_index}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#instance_id NetworkInterfaceAttachmentA#instance_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#network_interface_id NetworkInterfaceAttachmentA#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#id NetworkInterfaceAttachmentA#id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#network_card_index NetworkInterfaceAttachmentA#network_card_index}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.deviceIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#device_index NetworkInterfaceAttachmentA#device_index}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#instance_id NetworkInterfaceAttachmentA#instance_id}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#network_interface_id NetworkInterfaceAttachmentA#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#id NetworkInterfaceAttachmentA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkCardIndex`<sup>Optional</sup> <a name="networkCardIndex" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.networkCardIndex"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#network_card_index NetworkInterfaceAttachmentA#network_card_index}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#region NetworkInterfaceAttachmentA#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.resetNetworkCardIndex">resetNetworkCardIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkCardIndex` <a name="resetNetworkCardIndex" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.resetNetworkCardIndex"></a>

```java
public void resetNetworkCardIndex()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkInterfaceAttachmentA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isConstruct"></a>

```java
import io.cdktn.providers.aws.network_interface_attachment.NetworkInterfaceAttachmentA;

NetworkInterfaceAttachmentA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.network_interface_attachment.NetworkInterfaceAttachmentA;

NetworkInterfaceAttachmentA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.network_interface_attachment.NetworkInterfaceAttachmentA;

NetworkInterfaceAttachmentA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.network_interface_attachment.NetworkInterfaceAttachmentA;

NetworkInterfaceAttachmentA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkInterfaceAttachmentA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkInterfaceAttachmentA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkInterfaceAttachmentA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkInterfaceAttachmentA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceAttachmentA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.deviceIndexInput">deviceIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.networkCardIndexInput">networkCardIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.deviceIndexInput"></a>

```java
public java.lang.Number getDeviceIndexInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `networkCardIndexInput`<sup>Optional</sup> <a name="networkCardIndexInput" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.networkCardIndexInput"></a>

```java
public java.lang.Number getNetworkCardIndexInput();
```

- *Type:* java.lang.Number

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceAttachmentAConfig <a name="NetworkInterfaceAttachmentAConfig" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.network_interface_attachment.NetworkInterfaceAttachmentAConfig;

NetworkInterfaceAttachmentAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deviceIndex(java.lang.Number)
    .instanceId(java.lang.String)
    .networkInterfaceId(java.lang.String)
//  .id(java.lang.String)
//  .networkCardIndex(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#device_index NetworkInterfaceAttachmentA#device_index}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#instance_id NetworkInterfaceAttachmentA#instance_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#network_interface_id NetworkInterfaceAttachmentA#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#id NetworkInterfaceAttachmentA#id}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#network_card_index NetworkInterfaceAttachmentA#network_card_index}. |
| <code><a href="#@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#device_index NetworkInterfaceAttachmentA#device_index}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#instance_id NetworkInterfaceAttachmentA#instance_id}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#network_interface_id NetworkInterfaceAttachmentA#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#id NetworkInterfaceAttachmentA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkCardIndex`<sup>Optional</sup> <a name="networkCardIndex" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#network_card_index NetworkInterfaceAttachmentA#network_card_index}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkInterfaceAttachment.NetworkInterfaceAttachmentAConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/network_interface_attachment#region NetworkInterfaceAttachmentA#region}

---



