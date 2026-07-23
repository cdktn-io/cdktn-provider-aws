# `storagegatewayCachedIscsiVolume` Submodule <a name="`storagegatewayCachedIscsiVolume` Submodule" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayCachedIscsiVolume <a name="StoragegatewayCachedIscsiVolume" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume aws_storagegateway_cached_iscsi_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new StoragegatewayCachedIscsiVolume(Construct Scope, string Id, StoragegatewayCachedIscsiVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig">StoragegatewayCachedIscsiVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig">StoragegatewayCachedIscsiVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsEncrypted">ResetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSourceVolumeArn">ResetSourceVolumeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsEncrypted"></a>

```csharp
private void ResetKmsEncrypted()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetSourceVolumeArn` <a name="ResetSourceVolumeArn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSourceVolumeArn"></a>

```csharp
private void ResetSourceVolumeArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayCachedIscsiVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

StoragegatewayCachedIscsiVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

StoragegatewayCachedIscsiVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

StoragegatewayCachedIscsiVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

StoragegatewayCachedIscsiVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StoragegatewayCachedIscsiVolume resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayCachedIscsiVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayCachedIscsiVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayCachedIscsiVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.chapEnabled">ChapEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lunNumber">LunNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfacePort">NetworkInterfacePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeArn">VolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArnInput">GatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArnInput">SourceVolumeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytesInput">VolumeSizeInBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncrypted">KmsEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArn">SourceVolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytes">VolumeSizeInBytes</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChapEnabled`<sup>Required</sup> <a name="ChapEnabled" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.chapEnabled"></a>

```csharp
public IResolvable ChapEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LunNumber`<sup>Required</sup> <a name="LunNumber" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lunNumber"></a>

```csharp
public double LunNumber { get; }
```

- *Type:* double

---

##### `NetworkInterfacePort`<sup>Required</sup> <a name="NetworkInterfacePort" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfacePort"></a>

```csharp
public double NetworkInterfacePort { get; }
```

- *Type:* double

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `VolumeArn`<sup>Required</sup> <a name="VolumeArn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeArn"></a>

```csharp
public string VolumeArn { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArnInput"></a>

```csharp
public string GatewayArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncryptedInput"></a>

```csharp
public bool|IResolvable KmsEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `SourceVolumeArnInput`<sup>Optional</sup> <a name="SourceVolumeArnInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArnInput"></a>

```csharp
public string SourceVolumeArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInBytesInput`<sup>Optional</sup> <a name="VolumeSizeInBytesInput" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytesInput"></a>

```csharp
public double VolumeSizeInBytesInput { get; }
```

- *Type:* double

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncrypted"></a>

```csharp
public bool|IResolvable KmsEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `SourceVolumeArn`<sup>Required</sup> <a name="SourceVolumeArn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArn"></a>

```csharp
public string SourceVolumeArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `VolumeSizeInBytes`<sup>Required</sup> <a name="VolumeSizeInBytes" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytes"></a>

```csharp
public double VolumeSizeInBytes { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayCachedIscsiVolumeConfig <a name="StoragegatewayCachedIscsiVolumeConfig" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new StoragegatewayCachedIscsiVolumeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GatewayArn,
    string NetworkInterfaceId,
    string TargetName,
    double VolumeSizeInBytes,
    string Id = null,
    bool|IResolvable KmsEncrypted = null,
    string KmsKey = null,
    string Region = null,
    string SnapshotId = null,
    string SourceVolumeArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.targetName">TargetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.volumeSizeInBytes">VolumeSizeInBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.sourceVolumeArn">SourceVolumeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}. |
| <code><a href="#@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}.

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}.

---

##### `VolumeSizeInBytes`<sup>Required</sup> <a name="VolumeSizeInBytes" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.volumeSizeInBytes"></a>

```csharp
public double VolumeSizeInBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsEncrypted"></a>

```csharp
public bool|IResolvable KmsEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#region StoragegatewayCachedIscsiVolume#region}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}.

---

##### `SourceVolumeArn`<sup>Optional</sup> <a name="SourceVolumeArn" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.sourceVolumeArn"></a>

```csharp
public string SourceVolumeArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}.

---



