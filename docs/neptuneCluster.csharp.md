# `neptuneCluster` Submodule <a name="`neptuneCluster` Submodule" id="@cdktn/provider-aws.neptuneCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneCluster <a name="NeptuneCluster" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster aws_neptune_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptuneCluster(Construct Scope, string Id, NeptuneClusterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig">NeptuneClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig">NeptuneClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration">PutServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetAllowMajorVersionUpgrade">ResetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod">ResetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix">ResetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports">ResetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetGlobalClusterIdentifier">ResetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled">ResetIamDatabaseAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName">ResetNeptuneClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneInstanceParameterGroupName">ResetNeptuneInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName">ResetNeptuneSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier">ResetReplicationSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetServerlessV2ScalingConfiguration">ResetServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot">ResetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServerlessV2ScalingConfiguration` <a name="PutServerlessV2ScalingConfiguration" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration"></a>

```csharp
private void PutServerlessV2ScalingConfiguration(NeptuneClusterServerlessV2ScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(NeptuneClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

---

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetAllowMajorVersionUpgrade"></a>

```csharp
private void ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod"></a>

```csharp
private void ResetBackupRetentionPeriod()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifier"></a>

```csharp
private void ResetClusterIdentifier()
```

##### `ResetClusterIdentifierPrefix` <a name="ResetClusterIdentifierPrefix" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix"></a>

```csharp
private void ResetClusterIdentifierPrefix()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot"></a>

```csharp
private void ResetCopyTagsToSnapshot()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetEnableCloudwatchLogsExports` <a name="ResetEnableCloudwatchLogsExports" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports"></a>

```csharp
private void ResetEnableCloudwatchLogsExports()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier"></a>

```csharp
private void ResetFinalSnapshotIdentifier()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetGlobalClusterIdentifier"></a>

```csharp
private void ResetGlobalClusterIdentifier()
```

##### `ResetIamDatabaseAuthenticationEnabled` <a name="ResetIamDatabaseAuthenticationEnabled" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled"></a>

```csharp
private void ResetIamDatabaseAuthenticationEnabled()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetIamRoles"></a>

```csharp
private void ResetIamRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetNeptuneClusterParameterGroupName` <a name="ResetNeptuneClusterParameterGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName"></a>

```csharp
private void ResetNeptuneClusterParameterGroupName()
```

##### `ResetNeptuneInstanceParameterGroupName` <a name="ResetNeptuneInstanceParameterGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneInstanceParameterGroupName"></a>

```csharp
private void ResetNeptuneInstanceParameterGroupName()
```

##### `ResetNeptuneSubnetGroupName` <a name="ResetNeptuneSubnetGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName"></a>

```csharp
private void ResetNeptuneSubnetGroupName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow"></a>

```csharp
private void ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReplicationSourceIdentifier` <a name="ResetReplicationSourceIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier"></a>

```csharp
private void ResetReplicationSourceIdentifier()
```

##### `ResetServerlessV2ScalingConfiguration` <a name="ResetServerlessV2ScalingConfiguration" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetServerlessV2ScalingConfiguration"></a>

```csharp
private void ResetServerlessV2ScalingConfiguration()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot"></a>

```csharp
private void ResetSkipFinalSnapshot()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier"></a>

```csharp
private void ResetSnapshotIdentifier()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetStorageEncrypted"></a>

```csharp
private void ResetStorageEncrypted()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NeptuneCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NeptuneCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NeptuneCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NeptuneCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NeptuneCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NeptuneCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptuneCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptuneCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NeptuneCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterMembers">ClusterMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterResourceId">ClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference">NeptuneClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput">ClusterIdentifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput">EnableCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput">IamDatabaseAuthenticationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput">NeptuneClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupNameInput">NeptuneInstanceParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput">NeptuneSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput">ReplicationSourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfigurationInput">ServerlessV2ScalingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName">NeptuneClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupName">NeptuneInstanceParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName">NeptuneSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterMembers`<sup>Required</sup> <a name="ClusterMembers" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterMembers"></a>

```csharp
public string[] ClusterMembers { get; }
```

- *Type:* string[]

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterResourceId"></a>

```csharp
public string ClusterResourceId { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.readerEndpoint"></a>

```csharp
public string ReaderEndpoint { get; }
```

- *Type:* string

---

##### `ServerlessV2ScalingConfiguration`<sup>Required</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfiguration"></a>

```csharp
public NeptuneClusterServerlessV2ScalingConfigurationOutputReference ServerlessV2ScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference">NeptuneClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.timeouts"></a>

```csharp
public NeptuneClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a>

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgradeInput"></a>

```csharp
public bool|IResolvable AllowMajorVersionUpgradeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput"></a>

```csharp
public bool|IResolvable ApplyImmediatelyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput"></a>

```csharp
public double BackupRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierPrefixInput`<sup>Optional</sup> <a name="ClusterIdentifierPrefixInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput"></a>

```csharp
public string ClusterIdentifierPrefixInput { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshotInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtectionInput"></a>

```csharp
public bool|IResolvable DeletionProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnableCloudwatchLogsExportsInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput"></a>

```csharp
public string[] EnableCloudwatchLogsExportsInput { get; }
```

- *Type:* string[]

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput"></a>

```csharp
public string FinalSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifierInput"></a>

```csharp
public string GlobalClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `IamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabledInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput"></a>

```csharp
public bool|IResolvable IamDatabaseAuthenticationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.iamRolesInput"></a>

```csharp
public string[] IamRolesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NeptuneClusterParameterGroupNameInput`<sup>Optional</sup> <a name="NeptuneClusterParameterGroupNameInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput"></a>

```csharp
public string NeptuneClusterParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `NeptuneInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="NeptuneInstanceParameterGroupNameInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupNameInput"></a>

```csharp
public string NeptuneInstanceParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `NeptuneSubnetGroupNameInput`<sup>Optional</sup> <a name="NeptuneSubnetGroupNameInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput"></a>

```csharp
public string NeptuneSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput"></a>

```csharp
public string PreferredBackupWindowInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicationSourceIdentifierInput`<sup>Optional</sup> <a name="ReplicationSourceIdentifierInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput"></a>

```csharp
public string ReplicationSourceIdentifierInput { get; }
```

- *Type:* string

---

##### `ServerlessV2ScalingConfigurationInput`<sup>Optional</sup> <a name="ServerlessV2ScalingConfigurationInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfigurationInput"></a>

```csharp
public NeptuneClusterServerlessV2ScalingConfiguration ServerlessV2ScalingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput"></a>

```csharp
public bool|IResolvable SkipFinalSnapshotInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput"></a>

```csharp
public string SnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncryptedInput"></a>

```csharp
public bool|IResolvable StorageEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.timeoutsInput"></a>

```csharp
public IResolvable|NeptuneClusterTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgrade"></a>

```csharp
public bool|IResolvable AllowMajorVersionUpgrade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediately"></a>

```csharp
public bool|IResolvable ApplyImmediately { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; }
```

- *Type:* double

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `ClusterIdentifierPrefix`<sup>Required</sup> <a name="ClusterIdentifierPrefix" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix"></a>

```csharp
public string ClusterIdentifierPrefix { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshot { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCloudwatchLogsExports`<sup>Required</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports"></a>

```csharp
public string[] EnableCloudwatchLogsExports { get; }
```

- *Type:* string[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; }
```

- *Type:* string

---

##### `IamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled"></a>

```csharp
public bool|IResolvable IamDatabaseAuthenticationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `NeptuneClusterParameterGroupName`<sup>Required</sup> <a name="NeptuneClusterParameterGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName"></a>

```csharp
public string NeptuneClusterParameterGroupName { get; }
```

- *Type:* string

---

##### `NeptuneInstanceParameterGroupName`<sup>Required</sup> <a name="NeptuneInstanceParameterGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupName"></a>

```csharp
public string NeptuneInstanceParameterGroupName { get; }
```

- *Type:* string

---

##### `NeptuneSubnetGroupName`<sup>Required</sup> <a name="NeptuneSubnetGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName"></a>

```csharp
public string NeptuneSubnetGroupName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicationSourceIdentifier`<sup>Required</sup> <a name="ReplicationSourceIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier"></a>

```csharp
public string ReplicationSourceIdentifier { get; }
```

- *Type:* string

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot"></a>

```csharp
public bool|IResolvable SkipFinalSnapshot { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; }
```

- *Type:* string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncrypted"></a>

```csharp
public bool|IResolvable StorageEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.neptuneCluster.NeptuneCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterConfig <a name="NeptuneClusterConfig" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptuneClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AllowMajorVersionUpgrade = null,
    bool|IResolvable ApplyImmediately = null,
    string[] AvailabilityZones = null,
    double BackupRetentionPeriod = null,
    string ClusterIdentifier = null,
    string ClusterIdentifierPrefix = null,
    bool|IResolvable CopyTagsToSnapshot = null,
    bool|IResolvable DeletionProtection = null,
    string[] EnableCloudwatchLogsExports = null,
    string Engine = null,
    string EngineVersion = null,
    string FinalSnapshotIdentifier = null,
    string GlobalClusterIdentifier = null,
    bool|IResolvable IamDatabaseAuthenticationEnabled = null,
    string[] IamRoles = null,
    string Id = null,
    string KmsKeyArn = null,
    string NeptuneClusterParameterGroupName = null,
    string NeptuneInstanceParameterGroupName = null,
    string NeptuneSubnetGroupName = null,
    double Port = null,
    string PreferredBackupWindow = null,
    string PreferredMaintenanceWindow = null,
    string Region = null,
    string ReplicationSourceIdentifier = null,
    NeptuneClusterServerlessV2ScalingConfiguration ServerlessV2ScalingConfiguration = null,
    bool|IResolvable SkipFinalSnapshot = null,
    string SnapshotIdentifier = null,
    bool|IResolvable StorageEncrypted = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    NeptuneClusterTimeouts Timeouts = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#availability_zones NeptuneCluster#availability_zones}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#engine NeptuneCluster#engine}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#engine_version NeptuneCluster#engine_version}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#iam_roles NeptuneCluster#iam_roles}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#id NeptuneCluster#id}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName">NeptuneClusterParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneInstanceParameterGroupName">NeptuneInstanceParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName">NeptuneSubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#port NeptuneCluster#port}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | serverless_v2_scaling_configuration block. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#storage_type NeptuneCluster#storage_type}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#tags NeptuneCluster#tags}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#tags_all NeptuneCluster#tags_all}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.allowMajorVersionUpgrade"></a>

```csharp
public bool|IResolvable AllowMajorVersionUpgrade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.applyImmediately"></a>

```csharp
public bool|IResolvable ApplyImmediately { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#availability_zones NeptuneCluster#availability_zones}.

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}.

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}.

---

##### `ClusterIdentifierPrefix`<sup>Optional</sup> <a name="ClusterIdentifierPrefix" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix"></a>

```csharp
public string ClusterIdentifierPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}.

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshot { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.deletionProtection"></a>

```csharp
public bool|IResolvable DeletionProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}.

---

##### `EnableCloudwatchLogsExports`<sup>Optional</sup> <a name="EnableCloudwatchLogsExports" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports"></a>

```csharp
public string[] EnableCloudwatchLogsExports { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#engine NeptuneCluster#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#engine_version NeptuneCluster#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}.

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}.

---

##### `IamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled"></a>

```csharp
public bool|IResolvable IamDatabaseAuthenticationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#iam_roles NeptuneCluster#iam_roles}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#id NeptuneCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}.

---

##### `NeptuneClusterParameterGroupName`<sup>Optional</sup> <a name="NeptuneClusterParameterGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName"></a>

```csharp
public string NeptuneClusterParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}.

---

##### `NeptuneInstanceParameterGroupName`<sup>Optional</sup> <a name="NeptuneInstanceParameterGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneInstanceParameterGroupName"></a>

```csharp
public string NeptuneInstanceParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}.

---

##### `NeptuneSubnetGroupName`<sup>Optional</sup> <a name="NeptuneSubnetGroupName" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName"></a>

```csharp
public string NeptuneSubnetGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#port NeptuneCluster#port}.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#region NeptuneCluster#region}

---

##### `ReplicationSourceIdentifier`<sup>Optional</sup> <a name="ReplicationSourceIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier"></a>

```csharp
public string ReplicationSourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}.

---

##### `ServerlessV2ScalingConfiguration`<sup>Optional</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```csharp
public NeptuneClusterServerlessV2ScalingConfiguration ServerlessV2ScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

serverless_v2_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#serverless_v2_scaling_configuration NeptuneCluster#serverless_v2_scaling_configuration}

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot"></a>

```csharp
public bool|IResolvable SkipFinalSnapshot { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}.

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted"></a>

```csharp
public bool|IResolvable StorageEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#storage_type NeptuneCluster#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#tags NeptuneCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#tags_all NeptuneCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.timeouts"></a>

```csharp
public NeptuneClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#timeouts NeptuneCluster#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}.

---

### NeptuneClusterServerlessV2ScalingConfiguration <a name="NeptuneClusterServerlessV2ScalingConfiguration" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptuneClusterServerlessV2ScalingConfiguration {
    double MaxCapacity = null,
    double MinCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#max_capacity NeptuneCluster#max_capacity}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#min_capacity NeptuneCluster#min_capacity}. |

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#max_capacity NeptuneCluster#max_capacity}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#min_capacity NeptuneCluster#min_capacity}.

---

### NeptuneClusterTimeouts <a name="NeptuneClusterTimeouts" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptuneClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#create NeptuneCluster#create}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#delete NeptuneCluster#delete}. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#update NeptuneCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#create NeptuneCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#delete NeptuneCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster#update NeptuneCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneClusterServerlessV2ScalingConfigurationOutputReference <a name="NeptuneClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptuneClusterServerlessV2ScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public NeptuneClusterServerlessV2ScalingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---


### NeptuneClusterTimeoutsOutputReference <a name="NeptuneClusterTimeoutsOutputReference" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NeptuneClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NeptuneClusterTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

---



