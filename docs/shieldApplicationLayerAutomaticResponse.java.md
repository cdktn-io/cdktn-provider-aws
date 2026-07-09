# `shieldApplicationLayerAutomaticResponse` Submodule <a name="`shieldApplicationLayerAutomaticResponse` Submodule" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldApplicationLayerAutomaticResponse <a name="ShieldApplicationLayerAutomaticResponse" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response aws_shield_application_layer_automatic_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer"></a>

```java
import io.cdktn.providers.aws.shield_application_layer_automatic_response.ShieldApplicationLayerAutomaticResponse;

ShieldApplicationLayerAutomaticResponse.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .resourceArn(java.lang.String)
//  .timeouts(ShieldApplicationLayerAutomaticResponseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.resourceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#timeouts ShieldApplicationLayerAutomaticResponse#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts"></a>

```java
public void putTimeouts(ShieldApplicationLayerAutomaticResponseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

---

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ShieldApplicationLayerAutomaticResponse resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct"></a>

```java
import io.cdktn.providers.aws.shield_application_layer_automatic_response.ShieldApplicationLayerAutomaticResponse;

ShieldApplicationLayerAutomaticResponse.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.shield_application_layer_automatic_response.ShieldApplicationLayerAutomaticResponse;

ShieldApplicationLayerAutomaticResponse.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.shield_application_layer_automatic_response.ShieldApplicationLayerAutomaticResponse;

ShieldApplicationLayerAutomaticResponse.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.shield_application_layer_automatic_response.ShieldApplicationLayerAutomaticResponse;

ShieldApplicationLayerAutomaticResponse.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ShieldApplicationLayerAutomaticResponse.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ShieldApplicationLayerAutomaticResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ShieldApplicationLayerAutomaticResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ShieldApplicationLayerAutomaticResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ShieldApplicationLayerAutomaticResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference">ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeouts"></a>

```java
public ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference">ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeoutsInput"></a>

```java
public IResolvable|ShieldApplicationLayerAutomaticResponseTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldApplicationLayerAutomaticResponseConfig <a name="ShieldApplicationLayerAutomaticResponseConfig" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.shield_application_layer_automatic_response.ShieldApplicationLayerAutomaticResponseConfig;

ShieldApplicationLayerAutomaticResponseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .resourceArn(java.lang.String)
//  .timeouts(ShieldApplicationLayerAutomaticResponseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.timeouts"></a>

```java
public ShieldApplicationLayerAutomaticResponseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#timeouts ShieldApplicationLayerAutomaticResponse#timeouts}

---

### ShieldApplicationLayerAutomaticResponseTimeouts <a name="ShieldApplicationLayerAutomaticResponseTimeouts" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.shield_application_layer_automatic_response.ShieldApplicationLayerAutomaticResponseTimeouts;

ShieldApplicationLayerAutomaticResponseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#create ShieldApplicationLayerAutomaticResponse#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#delete ShieldApplicationLayerAutomaticResponse#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/shield_application_layer_automatic_response#update ShieldApplicationLayerAutomaticResponse#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference <a name="ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.shield_application_layer_automatic_response.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference;

new ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ShieldApplicationLayerAutomaticResponseTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

---



