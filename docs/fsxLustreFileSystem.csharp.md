# `fsxLustreFileSystem` Submodule <a name="`fsxLustreFileSystem` Submodule" id="@cdktn/provider-aws.fsxLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxLustreFileSystem <a name="FsxLustreFileSystem" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system aws_fsx_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystem(Construct Scope, string Id, FsxLustreFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putDataReadCacheConfiguration">PutDataReadCacheConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putMetadataConfiguration">PutMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putRootSquashConfiguration">PutRootSquashConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutoImportPolicy">ResetAutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutomaticBackupRetentionDays">ResetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetCopyTagsToBackups">ResetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDailyAutomaticBackupStartTime">ResetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataCompressionType">ResetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataReadCacheConfiguration">ResetDataReadCacheConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDriveCacheType">ResetDriveCacheType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetEfaEnabled">ResetEfaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetExportPath">ResetExportPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFileSystemTypeVersion">ResetFileSystemTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFinalBackupTags">ResetFinalBackupTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportedFileChunkSize">ResetImportedFileChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportPath">ResetImportPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetMetadataConfiguration">ResetMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetPerUnitStorageThroughput">ResetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetRootSquashConfiguration">ResetRootSquashConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSkipFinalBackup">ResetSkipFinalBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageCapacity">ResetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetThroughputCapacity">ResetThroughputCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetWeeklyMaintenanceStartTime">ResetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataReadCacheConfiguration` <a name="PutDataReadCacheConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putDataReadCacheConfiguration"></a>

```csharp
private void PutDataReadCacheConfiguration(FsxLustreFileSystemDataReadCacheConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putDataReadCacheConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration">FsxLustreFileSystemDataReadCacheConfiguration</a>

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(FsxLustreFileSystemLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---

##### `PutMetadataConfiguration` <a name="PutMetadataConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putMetadataConfiguration"></a>

```csharp
private void PutMetadataConfiguration(FsxLustreFileSystemMetadataConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putMetadataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a>

---

##### `PutRootSquashConfiguration` <a name="PutRootSquashConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putRootSquashConfiguration"></a>

```csharp
private void PutRootSquashConfiguration(FsxLustreFileSystemRootSquashConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putRootSquashConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(FsxLustreFileSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

---

##### `ResetAutoImportPolicy` <a name="ResetAutoImportPolicy" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutoImportPolicy"></a>

```csharp
private void ResetAutoImportPolicy()
```

##### `ResetAutomaticBackupRetentionDays` <a name="ResetAutomaticBackupRetentionDays" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutomaticBackupRetentionDays"></a>

```csharp
private void ResetAutomaticBackupRetentionDays()
```

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetCopyTagsToBackups` <a name="ResetCopyTagsToBackups" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetCopyTagsToBackups"></a>

```csharp
private void ResetCopyTagsToBackups()
```

##### `ResetDailyAutomaticBackupStartTime` <a name="ResetDailyAutomaticBackupStartTime" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDailyAutomaticBackupStartTime"></a>

```csharp
private void ResetDailyAutomaticBackupStartTime()
```

##### `ResetDataCompressionType` <a name="ResetDataCompressionType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataCompressionType"></a>

```csharp
private void ResetDataCompressionType()
```

##### `ResetDataReadCacheConfiguration` <a name="ResetDataReadCacheConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataReadCacheConfiguration"></a>

```csharp
private void ResetDataReadCacheConfiguration()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetDriveCacheType` <a name="ResetDriveCacheType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDriveCacheType"></a>

```csharp
private void ResetDriveCacheType()
```

##### `ResetEfaEnabled` <a name="ResetEfaEnabled" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetEfaEnabled"></a>

```csharp
private void ResetEfaEnabled()
```

##### `ResetExportPath` <a name="ResetExportPath" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetExportPath"></a>

```csharp
private void ResetExportPath()
```

##### `ResetFileSystemTypeVersion` <a name="ResetFileSystemTypeVersion" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFileSystemTypeVersion"></a>

```csharp
private void ResetFileSystemTypeVersion()
```

##### `ResetFinalBackupTags` <a name="ResetFinalBackupTags" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFinalBackupTags"></a>

```csharp
private void ResetFinalBackupTags()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportedFileChunkSize` <a name="ResetImportedFileChunkSize" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportedFileChunkSize"></a>

```csharp
private void ResetImportedFileChunkSize()
```

##### `ResetImportPath` <a name="ResetImportPath" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportPath"></a>

```csharp
private void ResetImportPath()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetMetadataConfiguration` <a name="ResetMetadataConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetMetadataConfiguration"></a>

```csharp
private void ResetMetadataConfiguration()
```

##### `ResetPerUnitStorageThroughput` <a name="ResetPerUnitStorageThroughput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetPerUnitStorageThroughput"></a>

```csharp
private void ResetPerUnitStorageThroughput()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRootSquashConfiguration` <a name="ResetRootSquashConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetRootSquashConfiguration"></a>

```csharp
private void ResetRootSquashConfiguration()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSkipFinalBackup` <a name="ResetSkipFinalBackup" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSkipFinalBackup"></a>

```csharp
private void ResetSkipFinalBackup()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageCapacity"></a>

```csharp
private void ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetThroughputCapacity` <a name="ResetThroughputCapacity" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetThroughputCapacity"></a>

```csharp
private void ResetThroughputCapacity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeklyMaintenanceStartTime` <a name="ResetWeeklyMaintenanceStartTime" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetWeeklyMaintenanceStartTime"></a>

```csharp
private void ResetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FsxLustreFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FsxLustreFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FsxLustreFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FsxLustreFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FsxLustreFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FsxLustreFileSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FsxLustreFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FsxLustreFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FsxLustreFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataReadCacheConfiguration">DataReadCacheConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference">FsxLustreFileSystemDataReadCacheConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference">FsxLustreFileSystemLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference">FsxLustreFileSystemMetadataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.mountName">MountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.rootSquashConfiguration">RootSquashConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference">FsxLustreFileSystemRootSquashConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference">FsxLustreFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicyInput">AutoImportPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDaysInput">AutomaticBackupRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackupsInput">CopyTagsToBackupsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTimeInput">DailyAutomaticBackupStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionTypeInput">DataCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataReadCacheConfigurationInput">DataReadCacheConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration">FsxLustreFileSystemDataReadCacheConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheTypeInput">DriveCacheTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.efaEnabledInput">EfaEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPathInput">ExportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersionInput">FileSystemTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.finalBackupTagsInput">FinalBackupTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSizeInput">ImportedFileChunkSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPathInput">ImportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfigurationInput">LogConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.metadataConfigurationInput">MetadataConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughputInput">PerUnitStorageThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.rootSquashConfigurationInput">RootSquashConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.skipFinalBackupInput">SkipFinalBackupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.throughputCapacityInput">ThroughputCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTimeInput">WeeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicy">AutoImportPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionType">DataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheType">DriveCacheType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.efaEnabled">EfaEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPath">ExportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersion">FileSystemTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.finalBackupTags">FinalBackupTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPath">ImportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.throughputCapacity">ThroughputCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataReadCacheConfiguration`<sup>Required</sup> <a name="DataReadCacheConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataReadCacheConfiguration"></a>

```csharp
public FsxLustreFileSystemDataReadCacheConfigurationOutputReference DataReadCacheConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference">FsxLustreFileSystemDataReadCacheConfigurationOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfiguration"></a>

```csharp
public FsxLustreFileSystemLogConfigurationOutputReference LogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference">FsxLustreFileSystemLogConfigurationOutputReference</a>

---

##### `MetadataConfiguration`<sup>Required</sup> <a name="MetadataConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.metadataConfiguration"></a>

```csharp
public FsxLustreFileSystemMetadataConfigurationOutputReference MetadataConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference">FsxLustreFileSystemMetadataConfigurationOutputReference</a>

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.mountName"></a>

```csharp
public string MountName { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `RootSquashConfiguration`<sup>Required</sup> <a name="RootSquashConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.rootSquashConfiguration"></a>

```csharp
public FsxLustreFileSystemRootSquashConfigurationOutputReference RootSquashConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference">FsxLustreFileSystemRootSquashConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeouts"></a>

```csharp
public FsxLustreFileSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference">FsxLustreFileSystemTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AutoImportPolicyInput`<sup>Optional</sup> <a name="AutoImportPolicyInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicyInput"></a>

```csharp
public string AutoImportPolicyInput { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="AutomaticBackupRetentionDaysInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDaysInput"></a>

```csharp
public double AutomaticBackupRetentionDaysInput { get; }
```

- *Type:* double

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `CopyTagsToBackupsInput`<sup>Optional</sup> <a name="CopyTagsToBackupsInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackupsInput"></a>

```csharp
public bool|IResolvable CopyTagsToBackupsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTimeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```csharp
public string DailyAutomaticBackupStartTimeInput { get; }
```

- *Type:* string

---

##### `DataCompressionTypeInput`<sup>Optional</sup> <a name="DataCompressionTypeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionTypeInput"></a>

```csharp
public string DataCompressionTypeInput { get; }
```

- *Type:* string

---

##### `DataReadCacheConfigurationInput`<sup>Optional</sup> <a name="DataReadCacheConfigurationInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataReadCacheConfigurationInput"></a>

```csharp
public FsxLustreFileSystemDataReadCacheConfiguration DataReadCacheConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration">FsxLustreFileSystemDataReadCacheConfiguration</a>

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DriveCacheTypeInput`<sup>Optional</sup> <a name="DriveCacheTypeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheTypeInput"></a>

```csharp
public string DriveCacheTypeInput { get; }
```

- *Type:* string

---

##### `EfaEnabledInput`<sup>Optional</sup> <a name="EfaEnabledInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.efaEnabledInput"></a>

```csharp
public bool|IResolvable EfaEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportPathInput`<sup>Optional</sup> <a name="ExportPathInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPathInput"></a>

```csharp
public string ExportPathInput { get; }
```

- *Type:* string

---

##### `FileSystemTypeVersionInput`<sup>Optional</sup> <a name="FileSystemTypeVersionInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersionInput"></a>

```csharp
public string FileSystemTypeVersionInput { get; }
```

- *Type:* string

---

##### `FinalBackupTagsInput`<sup>Optional</sup> <a name="FinalBackupTagsInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.finalBackupTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FinalBackupTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportedFileChunkSizeInput`<sup>Optional</sup> <a name="ImportedFileChunkSizeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSizeInput"></a>

```csharp
public double ImportedFileChunkSizeInput { get; }
```

- *Type:* double

---

##### `ImportPathInput`<sup>Optional</sup> <a name="ImportPathInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPathInput"></a>

```csharp
public string ImportPathInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfigurationInput"></a>

```csharp
public FsxLustreFileSystemLogConfiguration LogConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---

##### `MetadataConfigurationInput`<sup>Optional</sup> <a name="MetadataConfigurationInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.metadataConfigurationInput"></a>

```csharp
public FsxLustreFileSystemMetadataConfiguration MetadataConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a>

---

##### `PerUnitStorageThroughputInput`<sup>Optional</sup> <a name="PerUnitStorageThroughputInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughputInput"></a>

```csharp
public double PerUnitStorageThroughputInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RootSquashConfigurationInput`<sup>Optional</sup> <a name="RootSquashConfigurationInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.rootSquashConfigurationInput"></a>

```csharp
public FsxLustreFileSystemRootSquashConfiguration RootSquashConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SkipFinalBackupInput`<sup>Optional</sup> <a name="SkipFinalBackupInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.skipFinalBackupInput"></a>

```csharp
public bool|IResolvable SkipFinalBackupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacityInput"></a>

```csharp
public double StorageCapacityInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputCapacityInput`<sup>Optional</sup> <a name="ThroughputCapacityInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.throughputCapacityInput"></a>

```csharp
public double ThroughputCapacityInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeoutsInput"></a>

```csharp
public IResolvable|FsxLustreFileSystemTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

---

##### `WeeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTimeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```csharp
public string WeeklyMaintenanceStartTimeInput { get; }
```

- *Type:* string

---

##### `AutoImportPolicy`<sup>Required</sup> <a name="AutoImportPolicy" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicy"></a>

```csharp
public string AutoImportPolicy { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; }
```

- *Type:* double

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackups"></a>

```csharp
public bool|IResolvable CopyTagsToBackups { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; }
```

- *Type:* string

---

##### `DataCompressionType`<sup>Required</sup> <a name="DataCompressionType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionType"></a>

```csharp
public string DataCompressionType { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `DriveCacheType`<sup>Required</sup> <a name="DriveCacheType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheType"></a>

```csharp
public string DriveCacheType { get; }
```

- *Type:* string

---

##### `EfaEnabled`<sup>Required</sup> <a name="EfaEnabled" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.efaEnabled"></a>

```csharp
public bool|IResolvable EfaEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPath"></a>

```csharp
public string ExportPath { get; }
```

- *Type:* string

---

##### `FileSystemTypeVersion`<sup>Required</sup> <a name="FileSystemTypeVersion" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersion"></a>

```csharp
public string FileSystemTypeVersion { get; }
```

- *Type:* string

---

##### `FinalBackupTags`<sup>Required</sup> <a name="FinalBackupTags" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.finalBackupTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FinalBackupTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportedFileChunkSize`<sup>Required</sup> <a name="ImportedFileChunkSize" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSize"></a>

```csharp
public double ImportedFileChunkSize { get; }
```

- *Type:* double

---

##### `ImportPath`<sup>Required</sup> <a name="ImportPath" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPath"></a>

```csharp
public string ImportPath { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughput"></a>

```csharp
public double PerUnitStorageThroughput { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SkipFinalBackup`<sup>Required</sup> <a name="SkipFinalBackup" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.skipFinalBackup"></a>

```csharp
public bool|IResolvable SkipFinalBackup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.throughputCapacity"></a>

```csharp
public double ThroughputCapacity { get; }
```

- *Type:* double

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxLustreFileSystemConfig <a name="FsxLustreFileSystemConfig" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] SubnetIds,
    string AutoImportPolicy = null,
    double AutomaticBackupRetentionDays = null,
    string BackupId = null,
    bool|IResolvable CopyTagsToBackups = null,
    string DailyAutomaticBackupStartTime = null,
    string DataCompressionType = null,
    FsxLustreFileSystemDataReadCacheConfiguration DataReadCacheConfiguration = null,
    string DeploymentType = null,
    string DriveCacheType = null,
    bool|IResolvable EfaEnabled = null,
    string ExportPath = null,
    string FileSystemTypeVersion = null,
    System.Collections.Generic.IDictionary<string, string> FinalBackupTags = null,
    string Id = null,
    double ImportedFileChunkSize = null,
    string ImportPath = null,
    string KmsKeyId = null,
    FsxLustreFileSystemLogConfiguration LogConfiguration = null,
    FsxLustreFileSystemMetadataConfiguration MetadataConfiguration = null,
    double PerUnitStorageThroughput = null,
    string Region = null,
    FsxLustreFileSystemRootSquashConfiguration RootSquashConfiguration = null,
    string[] SecurityGroupIds = null,
    bool|IResolvable SkipFinalBackup = null,
    double StorageCapacity = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double ThroughputCapacity = null,
    FsxLustreFileSystemTimeouts Timeouts = null,
    string WeeklyMaintenanceStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.autoImportPolicy">AutoImportPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataCompressionType">DataCompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataReadCacheConfiguration">DataReadCacheConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration">FsxLustreFileSystemDataReadCacheConfiguration</a></code> | data_read_cache_configuration block. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.driveCacheType">DriveCacheType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.efaEnabled">EfaEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#efa_enabled FsxLustreFileSystem#efa_enabled}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.exportPath">ExportPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.fileSystemTypeVersion">FileSystemTypeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.finalBackupTags">FinalBackupTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#final_backup_tags FsxLustreFileSystem#final_backup_tags}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#id FsxLustreFileSystem#id}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importPath">ImportPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a></code> | metadata_configuration block. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.rootSquashConfiguration">RootSquashConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a></code> | root_squash_configuration block. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#skip_final_backup FsxLustreFileSystem#skip_final_backup}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.throughputCapacity">ThroughputCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#throughput_capacity FsxLustreFileSystem#throughput_capacity}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}.

---

##### `AutoImportPolicy`<sup>Optional</sup> <a name="AutoImportPolicy" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.autoImportPolicy"></a>

```csharp
public string AutoImportPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}.

---

##### `AutomaticBackupRetentionDays`<sup>Optional</sup> <a name="AutomaticBackupRetentionDays" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}.

---

##### `CopyTagsToBackups`<sup>Optional</sup> <a name="CopyTagsToBackups" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.copyTagsToBackups"></a>

```csharp
public bool|IResolvable CopyTagsToBackups { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}.

---

##### `DailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}.

---

##### `DataCompressionType`<sup>Optional</sup> <a name="DataCompressionType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataCompressionType"></a>

```csharp
public string DataCompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}.

---

##### `DataReadCacheConfiguration`<sup>Optional</sup> <a name="DataReadCacheConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataReadCacheConfiguration"></a>

```csharp
public FsxLustreFileSystemDataReadCacheConfiguration DataReadCacheConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration">FsxLustreFileSystemDataReadCacheConfiguration</a>

data_read_cache_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#data_read_cache_configuration FsxLustreFileSystem#data_read_cache_configuration}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}.

---

##### `DriveCacheType`<sup>Optional</sup> <a name="DriveCacheType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.driveCacheType"></a>

```csharp
public string DriveCacheType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}.

---

##### `EfaEnabled`<sup>Optional</sup> <a name="EfaEnabled" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.efaEnabled"></a>

```csharp
public bool|IResolvable EfaEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#efa_enabled FsxLustreFileSystem#efa_enabled}.

---

##### `ExportPath`<sup>Optional</sup> <a name="ExportPath" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.exportPath"></a>

```csharp
public string ExportPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}.

---

##### `FileSystemTypeVersion`<sup>Optional</sup> <a name="FileSystemTypeVersion" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.fileSystemTypeVersion"></a>

```csharp
public string FileSystemTypeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}.

---

##### `FinalBackupTags`<sup>Optional</sup> <a name="FinalBackupTags" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.finalBackupTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FinalBackupTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#final_backup_tags FsxLustreFileSystem#final_backup_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#id FsxLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportedFileChunkSize`<sup>Optional</sup> <a name="ImportedFileChunkSize" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importedFileChunkSize"></a>

```csharp
public double ImportedFileChunkSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}.

---

##### `ImportPath`<sup>Optional</sup> <a name="ImportPath" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importPath"></a>

```csharp
public string ImportPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}.

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.logConfiguration"></a>

```csharp
public FsxLustreFileSystemLogConfiguration LogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#log_configuration FsxLustreFileSystem#log_configuration}

---

##### `MetadataConfiguration`<sup>Optional</sup> <a name="MetadataConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.metadataConfiguration"></a>

```csharp
public FsxLustreFileSystemMetadataConfiguration MetadataConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a>

metadata_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#metadata_configuration FsxLustreFileSystem#metadata_configuration}

---

##### `PerUnitStorageThroughput`<sup>Optional</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.perUnitStorageThroughput"></a>

```csharp
public double PerUnitStorageThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#region FsxLustreFileSystem#region}

---

##### `RootSquashConfiguration`<sup>Optional</sup> <a name="RootSquashConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.rootSquashConfiguration"></a>

```csharp
public FsxLustreFileSystemRootSquashConfiguration RootSquashConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a>

root_squash_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#root_squash_configuration FsxLustreFileSystem#root_squash_configuration}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}.

---

##### `SkipFinalBackup`<sup>Optional</sup> <a name="SkipFinalBackup" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.skipFinalBackup"></a>

```csharp
public bool|IResolvable SkipFinalBackup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#skip_final_backup FsxLustreFileSystem#skip_final_backup}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}.

---

##### `ThroughputCapacity`<sup>Optional</sup> <a name="ThroughputCapacity" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.throughputCapacity"></a>

```csharp
public double ThroughputCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#throughput_capacity FsxLustreFileSystem#throughput_capacity}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.timeouts"></a>

```csharp
public FsxLustreFileSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#timeouts FsxLustreFileSystem#timeouts}

---

##### `WeeklyMaintenanceStartTime`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}.

---

### FsxLustreFileSystemDataReadCacheConfiguration <a name="FsxLustreFileSystemDataReadCacheConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemDataReadCacheConfiguration {
    string SizingMode,
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration.property.sizingMode">SizingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#sizing_mode FsxLustreFileSystem#sizing_mode}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#size FsxLustreFileSystem#size}. |

---

##### `SizingMode`<sup>Required</sup> <a name="SizingMode" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration.property.sizingMode"></a>

```csharp
public string SizingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#sizing_mode FsxLustreFileSystem#sizing_mode}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#size FsxLustreFileSystem#size}.

---

### FsxLustreFileSystemLogConfiguration <a name="FsxLustreFileSystemLogConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemLogConfiguration {
    string Destination = null,
    string Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#level FsxLustreFileSystem#level}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#level FsxLustreFileSystem#level}.

---

### FsxLustreFileSystemMetadataConfiguration <a name="FsxLustreFileSystemMetadataConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemMetadataConfiguration {
    double Iops = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#iops FsxLustreFileSystem#iops}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#mode FsxLustreFileSystem#mode}. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#iops FsxLustreFileSystem#iops}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#mode FsxLustreFileSystem#mode}.

---

### FsxLustreFileSystemRootSquashConfiguration <a name="FsxLustreFileSystemRootSquashConfiguration" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemRootSquashConfiguration {
    string[] NoSquashNids = null,
    string RootSquash = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.property.noSquashNids">NoSquashNids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#no_squash_nids FsxLustreFileSystem#no_squash_nids}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.property.rootSquash">RootSquash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#root_squash FsxLustreFileSystem#root_squash}. |

---

##### `NoSquashNids`<sup>Optional</sup> <a name="NoSquashNids" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.property.noSquashNids"></a>

```csharp
public string[] NoSquashNids { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#no_squash_nids FsxLustreFileSystem#no_squash_nids}.

---

##### `RootSquash`<sup>Optional</sup> <a name="RootSquash" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.property.rootSquash"></a>

```csharp
public string RootSquash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#root_squash FsxLustreFileSystem#root_squash}.

---

### FsxLustreFileSystemTimeouts <a name="FsxLustreFileSystemTimeouts" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#create FsxLustreFileSystem#create}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#update FsxLustreFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#create FsxLustreFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/fsx_lustre_file_system#update FsxLustreFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxLustreFileSystemDataReadCacheConfigurationOutputReference <a name="FsxLustreFileSystemDataReadCacheConfigurationOutputReference" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemDataReadCacheConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSize` <a name="ResetSize" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.sizingModeInput">SizingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.sizingMode">SizingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration">FsxLustreFileSystemDataReadCacheConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `SizingModeInput`<sup>Optional</sup> <a name="SizingModeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.sizingModeInput"></a>

```csharp
public string SizingModeInput { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `SizingMode`<sup>Required</sup> <a name="SizingMode" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.sizingMode"></a>

```csharp
public string SizingMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfigurationOutputReference.property.internalValue"></a>

```csharp
public FsxLustreFileSystemDataReadCacheConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemDataReadCacheConfiguration">FsxLustreFileSystemDataReadCacheConfiguration</a>

---


### FsxLustreFileSystemLogConfigurationOutputReference <a name="FsxLustreFileSystemLogConfigurationOutputReference" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public FsxLustreFileSystemLogConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---


### FsxLustreFileSystemMetadataConfigurationOutputReference <a name="FsxLustreFileSystemMetadataConfigurationOutputReference" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemMetadataConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.internalValue"></a>

```csharp
public FsxLustreFileSystemMetadataConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a>

---


### FsxLustreFileSystemRootSquashConfigurationOutputReference <a name="FsxLustreFileSystemRootSquashConfigurationOutputReference" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemRootSquashConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resetNoSquashNids">ResetNoSquashNids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resetRootSquash">ResetRootSquash</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoSquashNids` <a name="ResetNoSquashNids" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resetNoSquashNids"></a>

```csharp
private void ResetNoSquashNids()
```

##### `ResetRootSquash` <a name="ResetRootSquash" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resetRootSquash"></a>

```csharp
private void ResetRootSquash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.noSquashNidsInput">NoSquashNidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.rootSquashInput">RootSquashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.noSquashNids">NoSquashNids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.rootSquash">RootSquash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NoSquashNidsInput`<sup>Optional</sup> <a name="NoSquashNidsInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.noSquashNidsInput"></a>

```csharp
public string[] NoSquashNidsInput { get; }
```

- *Type:* string[]

---

##### `RootSquashInput`<sup>Optional</sup> <a name="RootSquashInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.rootSquashInput"></a>

```csharp
public string RootSquashInput { get; }
```

- *Type:* string

---

##### `NoSquashNids`<sup>Required</sup> <a name="NoSquashNids" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.noSquashNids"></a>

```csharp
public string[] NoSquashNids { get; }
```

- *Type:* string[]

---

##### `RootSquash`<sup>Required</sup> <a name="RootSquash" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.rootSquash"></a>

```csharp
public string RootSquash { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.internalValue"></a>

```csharp
public FsxLustreFileSystemRootSquashConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a>

---


### FsxLustreFileSystemTimeoutsOutputReference <a name="FsxLustreFileSystemTimeoutsOutputReference" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FsxLustreFileSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxLustreFileSystemTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

---



