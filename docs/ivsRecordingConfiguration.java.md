# `ivsRecordingConfiguration` Submodule <a name="`ivsRecordingConfiguration` Submodule" id="@cdktn/provider-aws.ivsRecordingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsRecordingConfiguration <a name="IvsRecordingConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration aws_ivs_recording_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfiguration;

IvsRecordingConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationConfiguration(IvsRecordingConfigurationDestinationConfiguration)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .recordingReconnectWindowSeconds(java.lang.Number)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .thumbnailConfiguration(IvsRecordingConfigurationThumbnailConfiguration)
//  .timeouts(IvsRecordingConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | destination_configuration block. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#id IvsRecordingConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#name IvsRecordingConfiguration#name}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.recordingReconnectWindowSeconds">recordingReconnectWindowSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.thumbnailConfiguration">thumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | thumbnail_configuration block. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.destinationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#destination_configuration IvsRecordingConfiguration#destination_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#id IvsRecordingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#name IvsRecordingConfiguration#name}.

---

##### `recordingReconnectWindowSeconds`<sup>Optional</sup> <a name="recordingReconnectWindowSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.recordingReconnectWindowSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#region IvsRecordingConfiguration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}.

---

##### `thumbnailConfiguration`<sup>Optional</sup> <a name="thumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.thumbnailConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

thumbnail_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#thumbnail_configuration IvsRecordingConfiguration#thumbnail_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#timeouts IvsRecordingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration">putDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration">putThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRecordingReconnectWindowSeconds">resetRecordingReconnectWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetThumbnailConfiguration">resetThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfiguration` <a name="putDestinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration"></a>

```java
public void putDestinationConfiguration(IvsRecordingConfigurationDestinationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

---

##### `putThumbnailConfiguration` <a name="putThumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration"></a>

```java
public void putThumbnailConfiguration(IvsRecordingConfigurationThumbnailConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts"></a>

```java
public void putTimeouts(IvsRecordingConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetName"></a>

```java
public void resetName()
```

##### `resetRecordingReconnectWindowSeconds` <a name="resetRecordingReconnectWindowSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRecordingReconnectWindowSeconds"></a>

```java
public void resetRecordingReconnectWindowSeconds()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetThumbnailConfiguration` <a name="resetThumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetThumbnailConfiguration"></a>

```java
public void resetThumbnailConfiguration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvsRecordingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfiguration;

IvsRecordingConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfiguration;

IvsRecordingConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfiguration;

IvsRecordingConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfiguration;

IvsRecordingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IvsRecordingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IvsRecordingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IvsRecordingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IvsRecordingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IvsRecordingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference">IvsRecordingConfigurationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfiguration">thumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference">IvsRecordingConfigurationThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference">IvsRecordingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfigurationInput">destinationConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSecondsInput">recordingReconnectWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfigurationInput">thumbnailConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSeconds">recordingReconnectWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfiguration"></a>

```java
public IvsRecordingConfigurationDestinationConfigurationOutputReference getDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference">IvsRecordingConfigurationDestinationConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `thumbnailConfiguration`<sup>Required</sup> <a name="thumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfiguration"></a>

```java
public IvsRecordingConfigurationThumbnailConfigurationOutputReference getThumbnailConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference">IvsRecordingConfigurationThumbnailConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeouts"></a>

```java
public IvsRecordingConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference">IvsRecordingConfigurationTimeoutsOutputReference</a>

---

##### `destinationConfigurationInput`<sup>Optional</sup> <a name="destinationConfigurationInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfigurationInput"></a>

```java
public IvsRecordingConfigurationDestinationConfiguration getDestinationConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recordingReconnectWindowSecondsInput`<sup>Optional</sup> <a name="recordingReconnectWindowSecondsInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSecondsInput"></a>

```java
public java.lang.Number getRecordingReconnectWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `thumbnailConfigurationInput`<sup>Optional</sup> <a name="thumbnailConfigurationInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfigurationInput"></a>

```java
public IvsRecordingConfigurationThumbnailConfiguration getThumbnailConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeoutsInput"></a>

```java
public IResolvable|IvsRecordingConfigurationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recordingReconnectWindowSeconds`<sup>Required</sup> <a name="recordingReconnectWindowSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSeconds"></a>

```java
public java.lang.Number getRecordingReconnectWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IvsRecordingConfigurationConfig <a name="IvsRecordingConfigurationConfig" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationConfig;

IvsRecordingConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationConfiguration(IvsRecordingConfigurationDestinationConfiguration)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .recordingReconnectWindowSeconds(java.lang.Number)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .thumbnailConfiguration(IvsRecordingConfigurationThumbnailConfiguration)
//  .timeouts(IvsRecordingConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.destinationConfiguration">destinationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | destination_configuration block. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#id IvsRecordingConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#name IvsRecordingConfiguration#name}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.recordingReconnectWindowSeconds">recordingReconnectWindowSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.thumbnailConfiguration">thumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | thumbnail_configuration block. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationConfiguration`<sup>Required</sup> <a name="destinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.destinationConfiguration"></a>

```java
public IvsRecordingConfigurationDestinationConfiguration getDestinationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#destination_configuration IvsRecordingConfiguration#destination_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#id IvsRecordingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#name IvsRecordingConfiguration#name}.

---

##### `recordingReconnectWindowSeconds`<sup>Optional</sup> <a name="recordingReconnectWindowSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.recordingReconnectWindowSeconds"></a>

```java
public java.lang.Number getRecordingReconnectWindowSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#region IvsRecordingConfiguration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}.

---

##### `thumbnailConfiguration`<sup>Optional</sup> <a name="thumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.thumbnailConfiguration"></a>

```java
public IvsRecordingConfigurationThumbnailConfiguration getThumbnailConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

thumbnail_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#thumbnail_configuration IvsRecordingConfiguration#thumbnail_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.timeouts"></a>

```java
public IvsRecordingConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#timeouts IvsRecordingConfiguration#timeouts}

---

### IvsRecordingConfigurationDestinationConfiguration <a name="IvsRecordingConfigurationDestinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationDestinationConfiguration;

IvsRecordingConfigurationDestinationConfiguration.builder()
    .s3(IvsRecordingConfigurationDestinationConfigurationS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.property.s3"></a>

```java
public IvsRecordingConfigurationDestinationConfigurationS3 getS3();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#s3 IvsRecordingConfiguration#s3}

---

### IvsRecordingConfigurationDestinationConfigurationS3 <a name="IvsRecordingConfigurationDestinationConfigurationS3" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationDestinationConfigurationS3;

IvsRecordingConfigurationDestinationConfigurationS3.builder()
    .bucketName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}.

---

### IvsRecordingConfigurationThumbnailConfiguration <a name="IvsRecordingConfigurationThumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationThumbnailConfiguration;

IvsRecordingConfigurationThumbnailConfiguration.builder()
//  .recordingMode(java.lang.String)
//  .targetIntervalSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.recordingMode">recordingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.targetIntervalSeconds">targetIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}. |

---

##### `recordingMode`<sup>Optional</sup> <a name="recordingMode" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.recordingMode"></a>

```java
public java.lang.String getRecordingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}.

---

##### `targetIntervalSeconds`<sup>Optional</sup> <a name="targetIntervalSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.targetIntervalSeconds"></a>

```java
public java.lang.Number getTargetIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}.

---

### IvsRecordingConfigurationTimeouts <a name="IvsRecordingConfigurationTimeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationTimeouts;

IvsRecordingConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#create IvsRecordingConfiguration#create}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#create IvsRecordingConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvsRecordingConfigurationDestinationConfigurationOutputReference <a name="IvsRecordingConfigurationDestinationConfigurationOutputReference" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationDestinationConfigurationOutputReference;

new IvsRecordingConfigurationDestinationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3">putS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3"></a>

```java
public void putS3(IvsRecordingConfigurationDestinationConfigurationS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference">IvsRecordingConfigurationDestinationConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3"></a>

```java
public IvsRecordingConfigurationDestinationConfigurationS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference">IvsRecordingConfigurationDestinationConfigurationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3Input"></a>

```java
public IvsRecordingConfigurationDestinationConfigurationS3 getS3Input();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.internalValue"></a>

```java
public IvsRecordingConfigurationDestinationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

---


### IvsRecordingConfigurationDestinationConfigurationS3OutputReference <a name="IvsRecordingConfigurationDestinationConfigurationS3OutputReference" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference;

new IvsRecordingConfigurationDestinationConfigurationS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.internalValue"></a>

```java
public IvsRecordingConfigurationDestinationConfigurationS3 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

---


### IvsRecordingConfigurationThumbnailConfigurationOutputReference <a name="IvsRecordingConfigurationThumbnailConfigurationOutputReference" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationThumbnailConfigurationOutputReference;

new IvsRecordingConfigurationThumbnailConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetRecordingMode">resetRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetTargetIntervalSeconds">resetTargetIntervalSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecordingMode` <a name="resetRecordingMode" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetRecordingMode"></a>

```java
public void resetRecordingMode()
```

##### `resetTargetIntervalSeconds` <a name="resetTargetIntervalSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetTargetIntervalSeconds"></a>

```java
public void resetTargetIntervalSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingModeInput">recordingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput">targetIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingMode">recordingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSeconds">targetIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recordingModeInput`<sup>Optional</sup> <a name="recordingModeInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingModeInput"></a>

```java
public java.lang.String getRecordingModeInput();
```

- *Type:* java.lang.String

---

##### `targetIntervalSecondsInput`<sup>Optional</sup> <a name="targetIntervalSecondsInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput"></a>

```java
public java.lang.Number getTargetIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `recordingMode`<sup>Required</sup> <a name="recordingMode" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingMode"></a>

```java
public java.lang.String getRecordingMode();
```

- *Type:* java.lang.String

---

##### `targetIntervalSeconds`<sup>Required</sup> <a name="targetIntervalSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSeconds"></a>

```java
public java.lang.Number getTargetIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue"></a>

```java
public IvsRecordingConfigurationThumbnailConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

---


### IvsRecordingConfigurationTimeoutsOutputReference <a name="IvsRecordingConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ivs_recording_configuration.IvsRecordingConfigurationTimeoutsOutputReference;

new IvsRecordingConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IvsRecordingConfigurationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

---



