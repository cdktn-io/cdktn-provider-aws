# `dbSnapshotCopy` Submodule <a name="`dbSnapshotCopy` Submodule" id="@cdktn/provider-aws.dbSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbSnapshotCopy <a name="DbSnapshotCopy" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy aws_db_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DbSnapshotCopy(Construct Scope, string Id, DbSnapshotCopyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig">DbSnapshotCopyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig">DbSnapshotCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetCopyTags">ResetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetDestinationRegion">ResetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOptionGroupName">ResetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetPresignedUrl">ResetPresignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetSharedAccounts">ResetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTargetCustomAvailabilityZone">ResetTargetCustomAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts"></a>

```csharp
private void PutTimeouts(DbSnapshotCopyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a>

---

##### `ResetCopyTags` <a name="ResetCopyTags" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetCopyTags"></a>

```csharp
private void ResetCopyTags()
```

##### `ResetDestinationRegion` <a name="ResetDestinationRegion" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetDestinationRegion"></a>

```csharp
private void ResetDestinationRegion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetOptionGroupName` <a name="ResetOptionGroupName" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetOptionGroupName"></a>

```csharp
private void ResetOptionGroupName()
```

##### `ResetPresignedUrl` <a name="ResetPresignedUrl" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetPresignedUrl"></a>

```csharp
private void ResetPresignedUrl()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSharedAccounts` <a name="ResetSharedAccounts" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetSharedAccounts"></a>

```csharp
private void ResetSharedAccounts()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTargetCustomAvailabilityZone` <a name="ResetTargetCustomAvailabilityZone" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTargetCustomAvailabilityZone"></a>

```csharp
private void ResetTargetCustomAvailabilityZone()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DbSnapshotCopy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DbSnapshotCopy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DbSnapshotCopy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DbSnapshotCopy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DbSnapshotCopy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DbSnapshotCopy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DbSnapshotCopy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DbSnapshotCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DbSnapshotCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dbSnapshotArn">DbSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.encrypted">Encrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.snapshotType">SnapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceRegion">SourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference">DbSnapshotCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTagsInput">CopyTagsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupNameInput">OptionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrlInput">PresignedUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sharedAccountsInput">SharedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifierInput">SourceDbSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZoneInput">TargetCustomAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifierInput">TargetDbSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTags">CopyTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupName">OptionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrl">PresignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sharedAccounts">SharedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifier">SourceDbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZone">TargetCustomAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifier">TargetDbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `DbSnapshotArn`<sup>Required</sup> <a name="DbSnapshotArn" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.dbSnapshotArn"></a>

```csharp
public string DbSnapshotArn { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.encrypted"></a>

```csharp
public IResolvable Encrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.snapshotType"></a>

```csharp
public string SnapshotType { get; }
```

- *Type:* string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceRegion"></a>

```csharp
public string SourceRegion { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeouts"></a>

```csharp
public DbSnapshotCopyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference">DbSnapshotCopyTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `CopyTagsInput`<sup>Optional</sup> <a name="CopyTagsInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTagsInput"></a>

```csharp
public bool|IResolvable CopyTagsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegionInput"></a>

```csharp
public string DestinationRegionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `OptionGroupNameInput`<sup>Optional</sup> <a name="OptionGroupNameInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupNameInput"></a>

```csharp
public string OptionGroupNameInput { get; }
```

- *Type:* string

---

##### `PresignedUrlInput`<sup>Optional</sup> <a name="PresignedUrlInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrlInput"></a>

```csharp
public string PresignedUrlInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SharedAccountsInput`<sup>Optional</sup> <a name="SharedAccountsInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sharedAccountsInput"></a>

```csharp
public string[] SharedAccountsInput { get; }
```

- *Type:* string[]

---

##### `SourceDbSnapshotIdentifierInput`<sup>Optional</sup> <a name="SourceDbSnapshotIdentifierInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifierInput"></a>

```csharp
public string SourceDbSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetCustomAvailabilityZoneInput`<sup>Optional</sup> <a name="TargetCustomAvailabilityZoneInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZoneInput"></a>

```csharp
public string TargetCustomAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `TargetDbSnapshotIdentifierInput`<sup>Optional</sup> <a name="TargetDbSnapshotIdentifierInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifierInput"></a>

```csharp
public string TargetDbSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.timeoutsInput"></a>

```csharp
public IResolvable|DbSnapshotCopyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a>

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.copyTags"></a>

```csharp
public bool|IResolvable CopyTags { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OptionGroupName`<sup>Required</sup> <a name="OptionGroupName" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.optionGroupName"></a>

```csharp
public string OptionGroupName { get; }
```

- *Type:* string

---

##### `PresignedUrl`<sup>Required</sup> <a name="PresignedUrl" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.presignedUrl"></a>

```csharp
public string PresignedUrl { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SharedAccounts`<sup>Required</sup> <a name="SharedAccounts" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sharedAccounts"></a>

```csharp
public string[] SharedAccounts { get; }
```

- *Type:* string[]

---

##### `SourceDbSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbSnapshotIdentifier" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.sourceDbSnapshotIdentifier"></a>

```csharp
public string SourceDbSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetCustomAvailabilityZone`<sup>Required</sup> <a name="TargetCustomAvailabilityZone" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetCustomAvailabilityZone"></a>

```csharp
public string TargetCustomAvailabilityZone { get; }
```

- *Type:* string

---

##### `TargetDbSnapshotIdentifier`<sup>Required</sup> <a name="TargetDbSnapshotIdentifier" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.targetDbSnapshotIdentifier"></a>

```csharp
public string TargetDbSnapshotIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbSnapshotCopyConfig <a name="DbSnapshotCopyConfig" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DbSnapshotCopyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SourceDbSnapshotIdentifier,
    string TargetDbSnapshotIdentifier,
    bool|IResolvable CopyTags = null,
    string DestinationRegion = null,
    string Id = null,
    string KmsKeyId = null,
    string OptionGroupName = null,
    string PresignedUrl = null,
    string Region = null,
    string[] SharedAccounts = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TargetCustomAvailabilityZone = null,
    DbSnapshotCopyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sourceDbSnapshotIdentifier">SourceDbSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#source_db_snapshot_identifier DbSnapshotCopy#source_db_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetDbSnapshotIdentifier">TargetDbSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#target_db_snapshot_identifier DbSnapshotCopy#target_db_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.copyTags">CopyTags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#copy_tags DbSnapshotCopy#copy_tags}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#destination_region DbSnapshotCopy#destination_region}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#id DbSnapshotCopy#id}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#kms_key_id DbSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.optionGroupName">OptionGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#option_group_name DbSnapshotCopy#option_group_name}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.presignedUrl">PresignedUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#presigned_url DbSnapshotCopy#presigned_url}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sharedAccounts">SharedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#shared_accounts DbSnapshotCopy#shared_accounts}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#tags DbSnapshotCopy#tags}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#tags_all DbSnapshotCopy#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetCustomAvailabilityZone">TargetCustomAvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#target_custom_availability_zone DbSnapshotCopy#target_custom_availability_zone}. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SourceDbSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbSnapshotIdentifier" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sourceDbSnapshotIdentifier"></a>

```csharp
public string SourceDbSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#source_db_snapshot_identifier DbSnapshotCopy#source_db_snapshot_identifier}.

---

##### `TargetDbSnapshotIdentifier`<sup>Required</sup> <a name="TargetDbSnapshotIdentifier" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetDbSnapshotIdentifier"></a>

```csharp
public string TargetDbSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#target_db_snapshot_identifier DbSnapshotCopy#target_db_snapshot_identifier}.

---

##### `CopyTags`<sup>Optional</sup> <a name="CopyTags" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.copyTags"></a>

```csharp
public bool|IResolvable CopyTags { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#copy_tags DbSnapshotCopy#copy_tags}.

---

##### `DestinationRegion`<sup>Optional</sup> <a name="DestinationRegion" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#destination_region DbSnapshotCopy#destination_region}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#id DbSnapshotCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#kms_key_id DbSnapshotCopy#kms_key_id}.

---

##### `OptionGroupName`<sup>Optional</sup> <a name="OptionGroupName" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.optionGroupName"></a>

```csharp
public string OptionGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#option_group_name DbSnapshotCopy#option_group_name}.

---

##### `PresignedUrl`<sup>Optional</sup> <a name="PresignedUrl" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.presignedUrl"></a>

```csharp
public string PresignedUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#presigned_url DbSnapshotCopy#presigned_url}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#region DbSnapshotCopy#region}

---

##### `SharedAccounts`<sup>Optional</sup> <a name="SharedAccounts" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.sharedAccounts"></a>

```csharp
public string[] SharedAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#shared_accounts DbSnapshotCopy#shared_accounts}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#tags DbSnapshotCopy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#tags_all DbSnapshotCopy#tags_all}.

---

##### `TargetCustomAvailabilityZone`<sup>Optional</sup> <a name="TargetCustomAvailabilityZone" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.targetCustomAvailabilityZone"></a>

```csharp
public string TargetCustomAvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#target_custom_availability_zone DbSnapshotCopy#target_custom_availability_zone}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyConfig.property.timeouts"></a>

```csharp
public DbSnapshotCopyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#timeouts DbSnapshotCopy#timeouts}

---

### DbSnapshotCopyTimeouts <a name="DbSnapshotCopyTimeouts" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DbSnapshotCopyTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#create DbSnapshotCopy#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/db_snapshot_copy#create DbSnapshotCopy#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbSnapshotCopyTimeoutsOutputReference <a name="DbSnapshotCopyTimeoutsOutputReference" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DbSnapshotCopyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DbSnapshotCopyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dbSnapshotCopy.DbSnapshotCopyTimeouts">DbSnapshotCopyTimeouts</a>

---



