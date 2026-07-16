# `gluePartitionIndex` Submodule <a name="`gluePartitionIndex` Submodule" id="@cdktn/provider-aws.gluePartitionIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartitionIndex <a name="GluePartitionIndex" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index aws_glue_partition_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GluePartitionIndex(Construct Scope, string Id, GluePartitionIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig">GluePartitionIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig">GluePartitionIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex">PutPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionIndex` <a name="PutPartitionIndex" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex"></a>

```csharp
private void PutPartitionIndex(GluePartitionIndexPartitionIndex Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.putPartitionIndex.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts"></a>

```csharp
private void PutTimeouts(GluePartitionIndexTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GluePartitionIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GluePartitionIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GluePartitionIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GluePartitionIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GluePartitionIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GluePartitionIndex resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GluePartitionIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GluePartitionIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GluePartitionIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndex">PartitionIndex</a></code> | <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference">GluePartitionIndexPartitionIndexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference">GluePartitionIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndexInput">PartitionIndexInput</a></code> | <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndex"></a>

```csharp
public GluePartitionIndexPartitionIndexOutputReference PartitionIndex { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference">GluePartitionIndexPartitionIndexOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeouts"></a>

```csharp
public GluePartitionIndexTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference">GluePartitionIndexTimeoutsOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.partitionIndexInput"></a>

```csharp
public GluePartitionIndexPartitionIndex PartitionIndexInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.timeoutsInput"></a>

```csharp
public IResolvable|GluePartitionIndexTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionIndexConfig <a name="GluePartitionIndexConfig" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GluePartitionIndexConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DatabaseName,
    GluePartitionIndexPartitionIndex PartitionIndex,
    string TableName,
    string CatalogId = null,
    string Id = null,
    string Region = null,
    GluePartitionIndexTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#database_name GluePartitionIndex#database_name}. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.partitionIndex">PartitionIndex</a></code> | <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | partition_index block. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#table_name GluePartitionIndex#table_name}. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#id GluePartitionIndex#id}. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#database_name GluePartitionIndex#database_name}.

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.partitionIndex"></a>

```csharp
public GluePartitionIndexPartitionIndex PartitionIndex { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

partition_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#partition_index GluePartitionIndex#partition_index}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#table_name GluePartitionIndex#table_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#id GluePartitionIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#region GluePartitionIndex#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexConfig.property.timeouts"></a>

```csharp
public GluePartitionIndexTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#timeouts GluePartitionIndex#timeouts}

---

### GluePartitionIndexPartitionIndex <a name="GluePartitionIndexPartitionIndex" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GluePartitionIndexPartitionIndex {
    string IndexName = null,
    string[] Keys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.indexName">IndexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#index_name GluePartitionIndex#index_name}. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.keys">Keys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#keys GluePartitionIndex#keys}. |

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#index_name GluePartitionIndex#index_name}.

---

##### `Keys`<sup>Optional</sup> <a name="Keys" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex.property.keys"></a>

```csharp
public string[] Keys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#keys GluePartitionIndex#keys}.

---

### GluePartitionIndexTimeouts <a name="GluePartitionIndexTimeouts" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GluePartitionIndexTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#create GluePartitionIndex#create}. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#delete GluePartitionIndex#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#create GluePartitionIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/glue_partition_index#delete GluePartitionIndex#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionIndexPartitionIndexOutputReference <a name="GluePartitionIndexPartitionIndexOutputReference" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GluePartitionIndexPartitionIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetKeys">ResetKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetIndexName"></a>

```csharp
private void ResetIndexName()
```

##### `ResetKeys` <a name="ResetKeys" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.resetKeys"></a>

```csharp
private void ResetKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexStatus">IndexStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keysInput">KeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keys">Keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexStatus`<sup>Required</sup> <a name="IndexStatus" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexStatus"></a>

```csharp
public string IndexStatus { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keysInput"></a>

```csharp
public string[] KeysInput { get; }
```

- *Type:* string[]

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.keys"></a>

```csharp
public string[] Keys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndexOutputReference.property.internalValue"></a>

```csharp
public GluePartitionIndexPartitionIndex InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexPartitionIndex">GluePartitionIndexPartitionIndex</a>

---


### GluePartitionIndexTimeoutsOutputReference <a name="GluePartitionIndexTimeoutsOutputReference" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GluePartitionIndexTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GluePartitionIndexTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gluePartitionIndex.GluePartitionIndexTimeouts">GluePartitionIndexTimeouts</a>

---



