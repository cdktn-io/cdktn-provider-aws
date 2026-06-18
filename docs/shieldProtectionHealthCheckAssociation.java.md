# `shieldProtectionHealthCheckAssociation` Submodule <a name="`shieldProtectionHealthCheckAssociation` Submodule" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtectionHealthCheckAssociation <a name="ShieldProtectionHealthCheckAssociation" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association aws_shield_protection_health_check_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.shield_protection_health_check_association.ShieldProtectionHealthCheckAssociation;

ShieldProtectionHealthCheckAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .healthCheckArn(java.lang.String)
    .shieldProtectionId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.healthCheckArn">healthCheckArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.shieldProtectionId">shieldProtectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#id ShieldProtectionHealthCheckAssociation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckArn`<sup>Required</sup> <a name="healthCheckArn" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.healthCheckArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}.

---

##### `shieldProtectionId`<sup>Required</sup> <a name="shieldProtectionId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.shieldProtectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#id ShieldProtectionHealthCheckAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ShieldProtectionHealthCheckAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.shield_protection_health_check_association.ShieldProtectionHealthCheckAssociation;

ShieldProtectionHealthCheckAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.shield_protection_health_check_association.ShieldProtectionHealthCheckAssociation;

ShieldProtectionHealthCheckAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.shield_protection_health_check_association.ShieldProtectionHealthCheckAssociation;

ShieldProtectionHealthCheckAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.shield_protection_health_check_association.ShieldProtectionHealthCheckAssociation;

ShieldProtectionHealthCheckAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ShieldProtectionHealthCheckAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ShieldProtectionHealthCheckAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ShieldProtectionHealthCheckAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ShieldProtectionHealthCheckAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ShieldProtectionHealthCheckAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.healthCheckArnInput">healthCheckArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.shieldProtectionIdInput">shieldProtectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.healthCheckArn">healthCheckArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.shieldProtectionId">shieldProtectionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckArnInput`<sup>Optional</sup> <a name="healthCheckArnInput" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.healthCheckArnInput"></a>

```java
public java.lang.String getHealthCheckArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `shieldProtectionIdInput`<sup>Optional</sup> <a name="shieldProtectionIdInput" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.shieldProtectionIdInput"></a>

```java
public java.lang.String getShieldProtectionIdInput();
```

- *Type:* java.lang.String

---

##### `healthCheckArn`<sup>Required</sup> <a name="healthCheckArn" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.healthCheckArn"></a>

```java
public java.lang.String getHealthCheckArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `shieldProtectionId`<sup>Required</sup> <a name="shieldProtectionId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.shieldProtectionId"></a>

```java
public java.lang.String getShieldProtectionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionHealthCheckAssociationConfig <a name="ShieldProtectionHealthCheckAssociationConfig" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.shield_protection_health_check_association.ShieldProtectionHealthCheckAssociationConfig;

ShieldProtectionHealthCheckAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .healthCheckArn(java.lang.String)
    .shieldProtectionId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.healthCheckArn">healthCheckArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.shieldProtectionId">shieldProtectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}. |
| <code><a href="#@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#id ShieldProtectionHealthCheckAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckArn`<sup>Required</sup> <a name="healthCheckArn" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.healthCheckArn"></a>

```java
public java.lang.String getHealthCheckArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}.

---

##### `shieldProtectionId`<sup>Required</sup> <a name="shieldProtectionId" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.shieldProtectionId"></a>

```java
public java.lang.String getShieldProtectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/shield_protection_health_check_association#id ShieldProtectionHealthCheckAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



