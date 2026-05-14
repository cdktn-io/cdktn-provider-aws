# `dmsReplicationConfig` Submodule <a name="`dmsReplicationConfig` Submodule" id="@cdktn/provider-aws.dmsReplicationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationConfig <a name="DmsReplicationConfig" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config aws_dms_replication_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsReplicationConfig(Construct Scope, string Id, DmsReplicationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig">DmsReplicationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig">DmsReplicationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig">PutComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings">ResetReplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetStartReplication">ResetStartReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings">ResetSupplementalSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeConfig` <a name="PutComputeConfig" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig"></a>

```csharp
private void PutComputeConfig(DmsReplicationConfigComputeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DmsReplicationConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReplicationSettings` <a name="ResetReplicationSettings" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings"></a>

```csharp
private void ResetReplicationSettings()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier"></a>

```csharp
private void ResetResourceIdentifier()
```

##### `ResetStartReplication` <a name="ResetStartReplication" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetStartReplication"></a>

```csharp
private void ResetStartReplication()
```

##### `ResetSupplementalSettings` <a name="ResetSupplementalSettings" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings"></a>

```csharp
private void ResetSupplementalSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsReplicationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsReplicationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsReplicationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsReplicationConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsReplicationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DmsReplicationConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsReplicationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsReplicationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DmsReplicationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference">DmsReplicationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput">ComputeConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput">ReplicationConfigIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput">ReplicationSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput">ReplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput">SourceEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplicationInput">StartReplicationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput">SupplementalSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput">TableMappingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput">TargetEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier">ReplicationConfigIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings">ReplicationSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationType">ReplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn">SourceEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplication">StartReplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings">SupplementalSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings">TableMappings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn">TargetEndpointArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComputeConfig`<sup>Required</sup> <a name="ComputeConfig" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig"></a>

```csharp
public DmsReplicationConfigComputeConfigOutputReference ComputeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeouts"></a>

```csharp
public DmsReplicationConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference">DmsReplicationConfigTimeoutsOutputReference</a>

---

##### `ComputeConfigInput`<sup>Optional</sup> <a name="ComputeConfigInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput"></a>

```csharp
public DmsReplicationConfigComputeConfig ComputeConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicationConfigIdentifierInput`<sup>Optional</sup> <a name="ReplicationConfigIdentifierInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput"></a>

```csharp
public string ReplicationConfigIdentifierInput { get; }
```

- *Type:* string

---

##### `ReplicationSettingsInput`<sup>Optional</sup> <a name="ReplicationSettingsInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput"></a>

```csharp
public string ReplicationSettingsInput { get; }
```

- *Type:* string

---

##### `ReplicationTypeInput`<sup>Optional</sup> <a name="ReplicationTypeInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput"></a>

```csharp
public string ReplicationTypeInput { get; }
```

- *Type:* string

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceEndpointArnInput`<sup>Optional</sup> <a name="SourceEndpointArnInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput"></a>

```csharp
public string SourceEndpointArnInput { get; }
```

- *Type:* string

---

##### `StartReplicationInput`<sup>Optional</sup> <a name="StartReplicationInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplicationInput"></a>

```csharp
public bool|IResolvable StartReplicationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupplementalSettingsInput`<sup>Optional</sup> <a name="SupplementalSettingsInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput"></a>

```csharp
public string SupplementalSettingsInput { get; }
```

- *Type:* string

---

##### `TableMappingsInput`<sup>Optional</sup> <a name="TableMappingsInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput"></a>

```csharp
public string TableMappingsInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetEndpointArnInput`<sup>Optional</sup> <a name="TargetEndpointArnInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput"></a>

```csharp
public string TargetEndpointArnInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|DmsReplicationConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicationConfigIdentifier`<sup>Required</sup> <a name="ReplicationConfigIdentifier" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier"></a>

```csharp
public string ReplicationConfigIdentifier { get; }
```

- *Type:* string

---

##### `ReplicationSettings`<sup>Required</sup> <a name="ReplicationSettings" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings"></a>

```csharp
public string ReplicationSettings { get; }
```

- *Type:* string

---

##### `ReplicationType`<sup>Required</sup> <a name="ReplicationType" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationType"></a>

```csharp
public string ReplicationType { get; }
```

- *Type:* string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `SourceEndpointArn`<sup>Required</sup> <a name="SourceEndpointArn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn"></a>

```csharp
public string SourceEndpointArn { get; }
```

- *Type:* string

---

##### `StartReplication`<sup>Required</sup> <a name="StartReplication" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplication"></a>

```csharp
public bool|IResolvable StartReplication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SupplementalSettings`<sup>Required</sup> <a name="SupplementalSettings" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings"></a>

```csharp
public string SupplementalSettings { get; }
```

- *Type:* string

---

##### `TableMappings`<sup>Required</sup> <a name="TableMappings" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings"></a>

```csharp
public string TableMappings { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetEndpointArn`<sup>Required</sup> <a name="TargetEndpointArn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn"></a>

```csharp
public string TargetEndpointArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationConfigComputeConfig <a name="DmsReplicationConfigComputeConfig" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsReplicationConfigComputeConfig {
    string ReplicationSubnetGroupId,
    string AvailabilityZone = null,
    string DnsNameServers = null,
    string KmsKeyId = null,
    double MaxCapacityUnits = null,
    double MinCapacityUnits = null,
    bool|IResolvable MultiAz = null,
    string PreferredMaintenanceWindow = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers">DnsNameServers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits">MaxCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits">MinCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz">MultiAz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}. |

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId"></a>

```csharp
public string ReplicationSubnetGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}.

---

##### `DnsNameServers`<sup>Optional</sup> <a name="DnsNameServers" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers"></a>

```csharp
public string DnsNameServers { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}.

---

##### `MaxCapacityUnits`<sup>Optional</sup> <a name="MaxCapacityUnits" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits"></a>

```csharp
public double MaxCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}.

---

##### `MinCapacityUnits`<sup>Optional</sup> <a name="MinCapacityUnits" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits"></a>

```csharp
public double MinCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}.

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz"></a>

```csharp
public bool|IResolvable MultiAz { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}.

---

### DmsReplicationConfigConfig <a name="DmsReplicationConfigConfig" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsReplicationConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DmsReplicationConfigComputeConfig ComputeConfig,
    string ReplicationConfigIdentifier,
    string ReplicationType,
    string SourceEndpointArn,
    string TableMappings,
    string TargetEndpointArn,
    string Id = null,
    string Region = null,
    string ReplicationSettings = null,
    string ResourceIdentifier = null,
    bool|IResolvable StartReplication = null,
    string SupplementalSettings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DmsReplicationConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig">ComputeConfig</a></code> | <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | compute_config block. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier">ReplicationConfigIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType">ReplicationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn">SourceEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings">TableMappings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn">TargetEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings">ReplicationSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.startReplication">StartReplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings">SupplementalSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ComputeConfig`<sup>Required</sup> <a name="ComputeConfig" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig"></a>

```csharp
public DmsReplicationConfigComputeConfig ComputeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

compute_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}

---

##### `ReplicationConfigIdentifier`<sup>Required</sup> <a name="ReplicationConfigIdentifier" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier"></a>

```csharp
public string ReplicationConfigIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}.

---

##### `ReplicationType`<sup>Required</sup> <a name="ReplicationType" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType"></a>

```csharp
public string ReplicationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}.

---

##### `SourceEndpointArn`<sup>Required</sup> <a name="SourceEndpointArn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn"></a>

```csharp
public string SourceEndpointArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}.

---

##### `TableMappings`<sup>Required</sup> <a name="TableMappings" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings"></a>

```csharp
public string TableMappings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}.

---

##### `TargetEndpointArn`<sup>Required</sup> <a name="TargetEndpointArn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn"></a>

```csharp
public string TargetEndpointArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#region DmsReplicationConfig#region}

---

##### `ReplicationSettings`<sup>Optional</sup> <a name="ReplicationSettings" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings"></a>

```csharp
public string ReplicationSettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}.

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}.

---

##### `StartReplication`<sup>Optional</sup> <a name="StartReplication" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.startReplication"></a>

```csharp
public bool|IResolvable StartReplication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}.

---

##### `SupplementalSettings`<sup>Optional</sup> <a name="SupplementalSettings" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings"></a>

```csharp
public string SupplementalSettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.timeouts"></a>

```csharp
public DmsReplicationConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#timeouts DmsReplicationConfig#timeouts}

---

### DmsReplicationConfigTimeouts <a name="DmsReplicationConfigTimeouts" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsReplicationConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#create DmsReplicationConfig#create}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#update DmsReplicationConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#create DmsReplicationConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dms_replication_config#update DmsReplicationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationConfigComputeConfigOutputReference <a name="DmsReplicationConfigComputeConfigOutputReference" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsReplicationConfigComputeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers">ResetDnsNameServers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMaxCapacityUnits">ResetMaxCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits">ResetMinCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetDnsNameServers` <a name="ResetDnsNameServers" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers"></a>

```csharp
private void ResetDnsNameServers()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMaxCapacityUnits` <a name="ResetMaxCapacityUnits" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMaxCapacityUnits"></a>

```csharp
private void ResetMaxCapacityUnits()
```

##### `ResetMinCapacityUnits` <a name="ResetMinCapacityUnits" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits"></a>

```csharp
private void ResetMinCapacityUnits()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz"></a>

```csharp
private void ResetMultiAz()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput">DnsNameServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput">MaxCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput">MinCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput">MultiAzInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput">ReplicationSubnetGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers">DnsNameServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits">MaxCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits">MinCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz">MultiAz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `DnsNameServersInput`<sup>Optional</sup> <a name="DnsNameServersInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput"></a>

```csharp
public string DnsNameServersInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MaxCapacityUnitsInput`<sup>Optional</sup> <a name="MaxCapacityUnitsInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput"></a>

```csharp
public double MaxCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `MinCapacityUnitsInput`<sup>Optional</sup> <a name="MinCapacityUnitsInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput"></a>

```csharp
public double MinCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput"></a>

```csharp
public bool|IResolvable MultiAzInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `ReplicationSubnetGroupIdInput`<sup>Optional</sup> <a name="ReplicationSubnetGroupIdInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput"></a>

```csharp
public string ReplicationSubnetGroupIdInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `DnsNameServers`<sup>Required</sup> <a name="DnsNameServers" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers"></a>

```csharp
public string DnsNameServers { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MaxCapacityUnits`<sup>Required</sup> <a name="MaxCapacityUnits" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits"></a>

```csharp
public double MaxCapacityUnits { get; }
```

- *Type:* double

---

##### `MinCapacityUnits`<sup>Required</sup> <a name="MinCapacityUnits" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits"></a>

```csharp
public double MinCapacityUnits { get; }
```

- *Type:* double

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz"></a>

```csharp
public bool|IResolvable MultiAz { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId"></a>

```csharp
public string ReplicationSubnetGroupId { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue"></a>

```csharp
public DmsReplicationConfigComputeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---


### DmsReplicationConfigTimeoutsOutputReference <a name="DmsReplicationConfigTimeoutsOutputReference" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsReplicationConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsReplicationConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

---



