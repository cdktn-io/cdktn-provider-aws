# `outpostsCapacityTask` Submodule <a name="`outpostsCapacityTask` Submodule" id="@cdktn/provider-aws.outpostsCapacityTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsCapacityTask <a name="OutpostsCapacityTask" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task aws_outposts_capacity_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTask(Construct Scope, string Id, OutpostsCapacityTaskConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig">OutpostsCapacityTaskConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig">OutpostsCapacityTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool">PutInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude">PutInstancesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId">ResetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool">ResetInstancePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude">ResetInstancesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId">ResetOrderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances">ResetTaskActionOnBlockingInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstancePool` <a name="PutInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool"></a>

```csharp
private void PutInstancePool(IResolvable|OutpostsCapacityTaskInstancePool[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancePool.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]

---

##### `PutInstancesToExclude` <a name="PutInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude"></a>

```csharp
private void PutInstancesToExclude(IResolvable|OutpostsCapacityTaskInstancesToExclude[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putInstancesToExclude.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts"></a>

```csharp
private void PutTimeouts(OutpostsCapacityTaskTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---

##### `ResetAssetId` <a name="ResetAssetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetAssetId"></a>

```csharp
private void ResetAssetId()
```

##### `ResetInstancePool` <a name="ResetInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancePool"></a>

```csharp
private void ResetInstancePool()
```

##### `ResetInstancesToExclude` <a name="ResetInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetInstancesToExclude"></a>

```csharp
private void ResetInstancesToExclude()
```

##### `ResetOrderId` <a name="ResetOrderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetOrderId"></a>

```csharp
private void ResetOrderId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTaskActionOnBlockingInstances` <a name="ResetTaskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTaskActionOnBlockingInstances"></a>

```csharp
private void ResetTaskActionOnBlockingInstances()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OutpostsCapacityTask.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OutpostsCapacityTask.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OutpostsCapacityTask.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OutpostsCapacityTask.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OutpostsCapacityTask resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OutpostsCapacityTask to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OutpostsCapacityTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsCapacityTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId">CapacityTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate">CompletionDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool">InstancePool</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude">InstancesToExclude</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput">AssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput">InstancePoolInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput">InstancesToExcludeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput">OrderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput">OutpostIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput">TaskActionOnBlockingInstancesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId">AssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier">OutpostIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances">TaskActionOnBlockingInstances</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapacityTaskId`<sup>Required</sup> <a name="CapacityTaskId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.capacityTaskId"></a>

```csharp
public string CapacityTaskId { get; }
```

- *Type:* string

---

##### `CompletionDate`<sup>Required</sup> <a name="CompletionDate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.completionDate"></a>

```csharp
public string CompletionDate { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `InstancePool`<sup>Required</sup> <a name="InstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePool"></a>

```csharp
public OutpostsCapacityTaskInstancePoolList InstancePool { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList">OutpostsCapacityTaskInstancePoolList</a>

---

##### `InstancesToExclude`<sup>Required</sup> <a name="InstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExclude"></a>

```csharp
public OutpostsCapacityTaskInstancesToExcludeList InstancesToExclude { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList">OutpostsCapacityTaskInstancesToExcludeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeouts"></a>

```csharp
public OutpostsCapacityTaskTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference">OutpostsCapacityTaskTimeoutsOutputReference</a>

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetIdInput"></a>

```csharp
public string AssetIdInput { get; }
```

- *Type:* string

---

##### `InstancePoolInput`<sup>Optional</sup> <a name="InstancePoolInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancePoolInput"></a>

```csharp
public IResolvable|OutpostsCapacityTaskInstancePool[] InstancePoolInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]

---

##### `InstancesToExcludeInput`<sup>Optional</sup> <a name="InstancesToExcludeInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.instancesToExcludeInput"></a>

```csharp
public IResolvable|OutpostsCapacityTaskInstancesToExclude[] InstancesToExcludeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderIdInput"></a>

```csharp
public string OrderIdInput { get; }
```

- *Type:* string

---

##### `OutpostIdentifierInput`<sup>Optional</sup> <a name="OutpostIdentifierInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifierInput"></a>

```csharp
public string OutpostIdentifierInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TaskActionOnBlockingInstancesInput`<sup>Optional</sup> <a name="TaskActionOnBlockingInstancesInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstancesInput"></a>

```csharp
public string TaskActionOnBlockingInstancesInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.timeoutsInput"></a>

```csharp
public IResolvable|OutpostsCapacityTaskTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.assetId"></a>

```csharp
public string AssetId { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `OutpostIdentifier`<sup>Required</sup> <a name="OutpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.outpostIdentifier"></a>

```csharp
public string OutpostIdentifier { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TaskActionOnBlockingInstances`<sup>Required</sup> <a name="TaskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.taskActionOnBlockingInstances"></a>

```csharp
public string TaskActionOnBlockingInstances { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTask.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsCapacityTaskConfig <a name="OutpostsCapacityTaskConfig" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OutpostIdentifier,
    string AssetId = null,
    IResolvable|OutpostsCapacityTaskInstancePool[] InstancePool = null,
    IResolvable|OutpostsCapacityTaskInstancesToExclude[] InstancesToExclude = null,
    string OrderId = null,
    string Region = null,
    string TaskActionOnBlockingInstances = null,
    OutpostsCapacityTaskTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier">OutpostIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId">AssetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool">InstancePool</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]</code> | instance_pool block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude">InstancesToExclude</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]</code> | instances_to_exclude block. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId">OrderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances">TaskActionOnBlockingInstances</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OutpostIdentifier`<sup>Required</sup> <a name="OutpostIdentifier" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.outpostIdentifier"></a>

```csharp
public string OutpostIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#outpost_identifier OutpostsCapacityTask#outpost_identifier}.

---

##### `AssetId`<sup>Optional</sup> <a name="AssetId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.assetId"></a>

```csharp
public string AssetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#asset_id OutpostsCapacityTask#asset_id}.

---

##### `InstancePool`<sup>Optional</sup> <a name="InstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancePool"></a>

```csharp
public IResolvable|OutpostsCapacityTaskInstancePool[] InstancePool { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]

instance_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#instance_pool OutpostsCapacityTask#instance_pool}

---

##### `InstancesToExclude`<sup>Optional</sup> <a name="InstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.instancesToExclude"></a>

```csharp
public IResolvable|OutpostsCapacityTaskInstancesToExclude[] InstancesToExclude { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]

instances_to_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#instances_to_exclude OutpostsCapacityTask#instances_to_exclude}

---

##### `OrderId`<sup>Optional</sup> <a name="OrderId" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.orderId"></a>

```csharp
public string OrderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#order_id OutpostsCapacityTask#order_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#region OutpostsCapacityTask#region}

---

##### `TaskActionOnBlockingInstances`<sup>Optional</sup> <a name="TaskActionOnBlockingInstances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.taskActionOnBlockingInstances"></a>

```csharp
public string TaskActionOnBlockingInstances { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#task_action_on_blocking_instances OutpostsCapacityTask#task_action_on_blocking_instances}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskConfig.property.timeouts"></a>

```csharp
public OutpostsCapacityTaskTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#timeouts OutpostsCapacityTask#timeouts}

---

### OutpostsCapacityTaskInstancePool <a name="OutpostsCapacityTaskInstancePool" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskInstancePool {
    double Count,
    string InstanceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#count OutpostsCapacityTask#count}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#instance_type OutpostsCapacityTask#instance_type}.

---

### OutpostsCapacityTaskInstancesToExclude <a name="OutpostsCapacityTaskInstancesToExclude" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskInstancesToExclude {
    string[] Instances
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances">Instances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}. |

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude.property.instances"></a>

```csharp
public string[] Instances { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#instances OutpostsCapacityTask#instances}.

---

### OutpostsCapacityTaskTimeouts <a name="OutpostsCapacityTaskTimeouts" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#create OutpostsCapacityTask#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/outposts_capacity_task#delete OutpostsCapacityTask#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsCapacityTaskInstancePoolList <a name="OutpostsCapacityTaskInstancePoolList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskInstancePoolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get"></a>

```csharp
private OutpostsCapacityTaskInstancePoolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolList.property.internalValue"></a>

```csharp
public IResolvable|OutpostsCapacityTaskInstancePool[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>[]

---


### OutpostsCapacityTaskInstancePoolOutputReference <a name="OutpostsCapacityTaskInstancePoolOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskInstancePoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePoolOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OutpostsCapacityTaskInstancePool InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancePool">OutpostsCapacityTaskInstancePool</a>

---


### OutpostsCapacityTaskInstancesToExcludeList <a name="OutpostsCapacityTaskInstancesToExcludeList" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskInstancesToExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get"></a>

```csharp
private OutpostsCapacityTaskInstancesToExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeList.property.internalValue"></a>

```csharp
public IResolvable|OutpostsCapacityTaskInstancesToExclude[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>[]

---


### OutpostsCapacityTaskInstancesToExcludeOutputReference <a name="OutpostsCapacityTaskInstancesToExcludeOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskInstancesToExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput">InstancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances">Instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instancesInput"></a>

```csharp
public string[] InstancesInput { get; }
```

- *Type:* string[]

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.instances"></a>

```csharp
public string[] Instances { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExcludeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OutpostsCapacityTaskInstancesToExclude InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskInstancesToExclude">OutpostsCapacityTaskInstancesToExclude</a>

---


### OutpostsCapacityTaskTimeoutsOutputReference <a name="OutpostsCapacityTaskTimeoutsOutputReference" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OutpostsCapacityTaskTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OutpostsCapacityTaskTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.outpostsCapacityTask.OutpostsCapacityTaskTimeouts">OutpostsCapacityTaskTimeouts</a>

---



