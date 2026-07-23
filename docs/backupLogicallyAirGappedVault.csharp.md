# `backupLogicallyAirGappedVault` Submodule <a name="`backupLogicallyAirGappedVault` Submodule" id="@cdktn/provider-aws.backupLogicallyAirGappedVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLogicallyAirGappedVault <a name="BackupLogicallyAirGappedVault" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault aws_backup_logically_air_gapped_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BackupLogicallyAirGappedVault(Construct Scope, string Id, BackupLogicallyAirGappedVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig">BackupLogicallyAirGappedVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig">BackupLogicallyAirGappedVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts"></a>

```csharp
private void PutTimeouts(BackupLogicallyAirGappedVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>

---

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupLogicallyAirGappedVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BackupLogicallyAirGappedVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BackupLogicallyAirGappedVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BackupLogicallyAirGappedVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BackupLogicallyAirGappedVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupLogicallyAirGappedVault resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupLogicallyAirGappedVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupLogicallyAirGappedVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupLogicallyAirGappedVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference">BackupLogicallyAirGappedVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDaysInput">MaxRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDaysInput">MinRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDays">MinRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeouts"></a>

```csharp
public BackupLogicallyAirGappedVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference">BackupLogicallyAirGappedVaultTimeoutsOutputReference</a>

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `MaxRetentionDaysInput`<sup>Optional</sup> <a name="MaxRetentionDaysInput" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDaysInput"></a>

```csharp
public double MaxRetentionDaysInput { get; }
```

- *Type:* double

---

##### `MinRetentionDaysInput`<sup>Optional</sup> <a name="MinRetentionDaysInput" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDaysInput"></a>

```csharp
public double MinRetentionDaysInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeoutsInput"></a>

```csharp
public IResolvable|BackupLogicallyAirGappedVaultTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDays"></a>

```csharp
public double MaxRetentionDays { get; }
```

- *Type:* double

---

##### `MinRetentionDays`<sup>Required</sup> <a name="MinRetentionDays" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDays"></a>

```csharp
public double MinRetentionDays { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLogicallyAirGappedVaultConfig <a name="BackupLogicallyAirGappedVaultConfig" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BackupLogicallyAirGappedVaultConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double MaxRetentionDays,
    double MinRetentionDays,
    string Name,
    string EncryptionKeyArn = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BackupLogicallyAirGappedVaultTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.minRetentionDays">MinRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#encryption_key_arn BackupLogicallyAirGappedVault#encryption_key_arn}. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.maxRetentionDays"></a>

```csharp
public double MaxRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}.

---

##### `MinRetentionDays`<sup>Required</sup> <a name="MinRetentionDays" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.minRetentionDays"></a>

```csharp
public double MinRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}.

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#encryption_key_arn BackupLogicallyAirGappedVault#encryption_key_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#region BackupLogicallyAirGappedVault#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.timeouts"></a>

```csharp
public BackupLogicallyAirGappedVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#timeouts BackupLogicallyAirGappedVault#timeouts}

---

### BackupLogicallyAirGappedVaultTimeouts <a name="BackupLogicallyAirGappedVaultTimeouts" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BackupLogicallyAirGappedVaultTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/backup_logically_air_gapped_vault#create BackupLogicallyAirGappedVault#create}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLogicallyAirGappedVaultTimeoutsOutputReference <a name="BackupLogicallyAirGappedVaultTimeoutsOutputReference" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BackupLogicallyAirGappedVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupLogicallyAirGappedVaultTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>

---



