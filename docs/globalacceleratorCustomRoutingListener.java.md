# `globalacceleratorCustomRoutingListener` Submodule <a name="`globalacceleratorCustomRoutingListener` Submodule" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCustomRoutingListener <a name="GlobalacceleratorCustomRoutingListener" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener aws_globalaccelerator_custom_routing_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListener;

GlobalacceleratorCustomRoutingListener.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acceleratorArn(java.lang.String)
    .portRange(IResolvable|java.util.List<GlobalacceleratorCustomRoutingListenerPortRange>)
//  .id(java.lang.String)
//  .timeouts(GlobalacceleratorCustomRoutingListenerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.acceleratorArn">acceleratorArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.portRange">portRange</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>></code> | port_range block. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceleratorArn`<sup>Required</sup> <a name="acceleratorArn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.acceleratorArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}.

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.portRange"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>>

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#port_range GlobalacceleratorCustomRoutingListener#port_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#timeouts GlobalacceleratorCustomRoutingListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange">putPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPortRange` <a name="putPortRange" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange"></a>

```java
public void putPortRange(IResolvable|java.util.List<GlobalacceleratorCustomRoutingListenerPortRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts"></a>

```java
public void putTimeouts(GlobalacceleratorCustomRoutingListenerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorCustomRoutingListener resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListener;

GlobalacceleratorCustomRoutingListener.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListener;

GlobalacceleratorCustomRoutingListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListener;

GlobalacceleratorCustomRoutingListener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListener;

GlobalacceleratorCustomRoutingListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlobalacceleratorCustomRoutingListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlobalacceleratorCustomRoutingListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlobalacceleratorCustomRoutingListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlobalacceleratorCustomRoutingListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCustomRoutingListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList">GlobalacceleratorCustomRoutingListenerPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference">GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArnInput">acceleratorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRangeInput">portRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArn">acceleratorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRange"></a>

```java
public GlobalacceleratorCustomRoutingListenerPortRangeList getPortRange();
```

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList">GlobalacceleratorCustomRoutingListenerPortRangeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeouts"></a>

```java
public GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference">GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference</a>

---

##### `acceleratorArnInput`<sup>Optional</sup> <a name="acceleratorArnInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArnInput"></a>

```java
public java.lang.String getAcceleratorArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRangeInput"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorCustomRoutingListenerPortRange> getPortRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeoutsInput"></a>

```java
public IResolvable|GlobalacceleratorCustomRoutingListenerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

---

##### `acceleratorArn`<sup>Required</sup> <a name="acceleratorArn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArn"></a>

```java
public java.lang.String getAcceleratorArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCustomRoutingListenerConfig <a name="GlobalacceleratorCustomRoutingListenerConfig" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListenerConfig;

GlobalacceleratorCustomRoutingListenerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .acceleratorArn(java.lang.String)
    .portRange(IResolvable|java.util.List<GlobalacceleratorCustomRoutingListenerPortRange>)
//  .id(java.lang.String)
//  .timeouts(GlobalacceleratorCustomRoutingListenerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.acceleratorArn">acceleratorArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.portRange">portRange</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>></code> | port_range block. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceleratorArn`<sup>Required</sup> <a name="acceleratorArn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.acceleratorArn"></a>

```java
public java.lang.String getAcceleratorArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}.

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.portRange"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorCustomRoutingListenerPortRange> getPortRange();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>>

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#port_range GlobalacceleratorCustomRoutingListener#port_range}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.timeouts"></a>

```java
public GlobalacceleratorCustomRoutingListenerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#timeouts GlobalacceleratorCustomRoutingListener#timeouts}

---

### GlobalacceleratorCustomRoutingListenerPortRange <a name="GlobalacceleratorCustomRoutingListenerPortRange" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.Initializer"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListenerPortRange;

GlobalacceleratorCustomRoutingListenerPortRange.builder()
//  .fromPort(java.lang.Number)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}. |

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}.

---

### GlobalacceleratorCustomRoutingListenerTimeouts <a name="GlobalacceleratorCustomRoutingListenerTimeouts" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListenerTimeouts;

GlobalacceleratorCustomRoutingListenerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCustomRoutingListenerPortRangeList <a name="GlobalacceleratorCustomRoutingListenerPortRangeList" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListenerPortRangeList;

new GlobalacceleratorCustomRoutingListenerPortRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get"></a>

```java
public GlobalacceleratorCustomRoutingListenerPortRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorCustomRoutingListenerPortRange> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>>

---


### GlobalacceleratorCustomRoutingListenerPortRangeOutputReference <a name="GlobalacceleratorCustomRoutingListenerPortRangeOutputReference" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference;

new GlobalacceleratorCustomRoutingListenerPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|GlobalacceleratorCustomRoutingListenerPortRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange">GlobalacceleratorCustomRoutingListenerPortRange</a>

---


### GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference <a name="GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.globalaccelerator_custom_routing_listener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference;

new GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlobalacceleratorCustomRoutingListenerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

---



