# `odbAutonomousDatabaseSecretsManagerIntegration` Submodule <a name="`odbAutonomousDatabaseSecretsManagerIntegration` Submodule" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbAutonomousDatabaseSecretsManagerIntegration <a name="OdbAutonomousDatabaseSecretsManagerIntegration" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database_secrets_manager_integration aws_odb_autonomous_database_secrets_manager_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database_secrets_manager_integration.OdbAutonomousDatabaseSecretsManagerIntegration;

OdbAutonomousDatabaseSecretsManagerIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
//  .timeouts(OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database_secrets_manager_integration#region OdbAutonomousDatabaseSecretsManagerIntegration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database_secrets_manager_integration#timeouts OdbAutonomousDatabaseSecretsManagerIntegration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.putTimeouts"></a>

```java
public void putTimeouts(OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbAutonomousDatabaseSecretsManagerIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isConstruct"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database_secrets_manager_integration.OdbAutonomousDatabaseSecretsManagerIntegration;

OdbAutonomousDatabaseSecretsManagerIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database_secrets_manager_integration.OdbAutonomousDatabaseSecretsManagerIntegration;

OdbAutonomousDatabaseSecretsManagerIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database_secrets_manager_integration.OdbAutonomousDatabaseSecretsManagerIntegration;

OdbAutonomousDatabaseSecretsManagerIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database_secrets_manager_integration.OdbAutonomousDatabaseSecretsManagerIntegration;

OdbAutonomousDatabaseSecretsManagerIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OdbAutonomousDatabaseSecretsManagerIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OdbAutonomousDatabaseSecretsManagerIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OdbAutonomousDatabaseSecretsManagerIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OdbAutonomousDatabaseSecretsManagerIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database_secrets_manager_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OdbAutonomousDatabaseSecretsManagerIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference">OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.timeouts"></a>

```java
public OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference">OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.timeoutsInput"></a>

```java
public IResolvable|OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OdbAutonomousDatabaseSecretsManagerIntegrationConfig <a name="OdbAutonomousDatabaseSecretsManagerIntegrationConfig" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database_secrets_manager_integration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig;

OdbAutonomousDatabaseSecretsManagerIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
//  .timeouts(OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database_secrets_manager_integration#region OdbAutonomousDatabaseSecretsManagerIntegration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationConfig.property.timeouts"></a>

```java
public OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database_secrets_manager_integration#timeouts OdbAutonomousDatabaseSecretsManagerIntegration#timeouts}

---

### OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts <a name="OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database_secrets_manager_integration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts;

OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database_secrets_manager_integration#create OdbAutonomousDatabaseSecretsManagerIntegration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/odb_autonomous_database_secrets_manager_integration#delete OdbAutonomousDatabaseSecretsManagerIntegration#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference <a name="OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.odb_autonomous_database_secrets_manager_integration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference;

new OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabaseSecretsManagerIntegration.OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts">OdbAutonomousDatabaseSecretsManagerIntegrationTimeouts</a>

---



