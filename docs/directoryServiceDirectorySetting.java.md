# `directoryServiceDirectorySetting` Submodule <a name="`directoryServiceDirectorySetting` Submodule" id="@cdktn/provider-aws.directoryServiceDirectorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceDirectorySetting <a name="DirectoryServiceDirectorySetting" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting aws_directory_service_directory_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory_setting.DirectoryServiceDirectorySetting;

DirectoryServiceDirectorySetting.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryId(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DirectoryServiceDirectorySettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#directory_id DirectoryServiceDirectorySetting#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#name DirectoryServiceDirectorySetting#name}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#value DirectoryServiceDirectorySetting#value}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#directory_id DirectoryServiceDirectorySetting#directory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#name DirectoryServiceDirectorySetting#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#value DirectoryServiceDirectorySetting#value}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#region DirectoryServiceDirectorySetting#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#timeouts DirectoryServiceDirectorySetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.putTimeouts"></a>

```java
public void putTimeouts(DirectoryServiceDirectorySettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceDirectorySetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isConstruct"></a>

```java
import io.cdktn.providers.aws.directory_service_directory_setting.DirectoryServiceDirectorySetting;

DirectoryServiceDirectorySetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.directory_service_directory_setting.DirectoryServiceDirectorySetting;

DirectoryServiceDirectorySetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.directory_service_directory_setting.DirectoryServiceDirectorySetting;

DirectoryServiceDirectorySetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.directory_service_directory_setting.DirectoryServiceDirectorySetting;

DirectoryServiceDirectorySetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectoryServiceDirectorySetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectoryServiceDirectorySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectoryServiceDirectorySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectoryServiceDirectorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceDirectorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference">DirectoryServiceDirectorySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.timeouts"></a>

```java
public DirectoryServiceDirectorySettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference">DirectoryServiceDirectorySettingTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.timeoutsInput"></a>

```java
public IResolvable|DirectoryServiceDirectorySettingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceDirectorySettingConfig <a name="DirectoryServiceDirectorySettingConfig" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory_setting.DirectoryServiceDirectorySettingConfig;

DirectoryServiceDirectorySettingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryId(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(DirectoryServiceDirectorySettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#directory_id DirectoryServiceDirectorySetting#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#name DirectoryServiceDirectorySetting#name}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#value DirectoryServiceDirectorySetting#value}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#directory_id DirectoryServiceDirectorySetting#directory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#name DirectoryServiceDirectorySetting#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#value DirectoryServiceDirectorySetting#value}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#region DirectoryServiceDirectorySetting#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingConfig.property.timeouts"></a>

```java
public DirectoryServiceDirectorySettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#timeouts DirectoryServiceDirectorySetting#timeouts}

---

### DirectoryServiceDirectorySettingTimeouts <a name="DirectoryServiceDirectorySettingTimeouts" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory_setting.DirectoryServiceDirectorySettingTimeouts;

DirectoryServiceDirectorySettingTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#create DirectoryServiceDirectorySetting#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/directory_service_directory_setting#update DirectoryServiceDirectorySetting#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceDirectorySettingTimeoutsOutputReference <a name="DirectoryServiceDirectorySettingTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.directory_service_directory_setting.DirectoryServiceDirectorySettingTimeoutsOutputReference;

new DirectoryServiceDirectorySettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectoryServiceDirectorySettingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.directoryServiceDirectorySetting.DirectoryServiceDirectorySettingTimeouts">DirectoryServiceDirectorySettingTimeouts</a>

---



