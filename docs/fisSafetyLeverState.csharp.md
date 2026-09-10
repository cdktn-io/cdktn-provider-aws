# `fisSafetyLeverState` Submodule <a name="`fisSafetyLeverState` Submodule" id="@cdktn/provider-aws.fisSafetyLeverState"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisSafetyLeverState <a name="FisSafetyLeverState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state aws_fis_safety_lever_state}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FisSafetyLeverState(Construct Scope, string Id, FisSafetyLeverStateConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig">FisSafetyLeverStateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig">FisSafetyLeverStateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState">PutState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutState` <a name="PutState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState"></a>

```csharp
private void PutState(IResolvable|FisSafetyLeverStateState[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putState.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts"></a>

```csharp
private void PutTimeouts(FisSafetyLeverStateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FisSafetyLeverState resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FisSafetyLeverState.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FisSafetyLeverState.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FisSafetyLeverState.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FisSafetyLeverState.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FisSafetyLeverState resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FisSafetyLeverState to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FisSafetyLeverState that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FisSafetyLeverState to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.state">State</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList">FisSafetyLeverStateStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference">FisSafetyLeverStateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.stateInput">StateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.state"></a>

```csharp
public FisSafetyLeverStateStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList">FisSafetyLeverStateStateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeouts"></a>

```csharp
public FisSafetyLeverStateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference">FisSafetyLeverStateTimeoutsOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.stateInput"></a>

```csharp
public IResolvable|FisSafetyLeverStateState[] StateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.timeoutsInput"></a>

```csharp
public IResolvable|FisSafetyLeverStateTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverState.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FisSafetyLeverStateConfig <a name="FisSafetyLeverStateConfig" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FisSafetyLeverStateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Region = null,
    IResolvable|FisSafetyLeverStateState[] State = null,
    FisSafetyLeverStateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.state">State</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]</code> | state block. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#region FisSafetyLeverState#region}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.state"></a>

```csharp
public IResolvable|FisSafetyLeverStateState[] State { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]

state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#state FisSafetyLeverState#state}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateConfig.property.timeouts"></a>

```csharp
public FisSafetyLeverStateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#timeouts FisSafetyLeverState#timeouts}

---

### FisSafetyLeverStateState <a name="FisSafetyLeverStateState" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FisSafetyLeverStateState {
    string Reason,
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.reason">Reason</a></code> | <code>string</code> | Reason for the current status of the safety lever. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.status">Status</a></code> | <code>string</code> | State of the safety lever. Valid values: engaged, disengaged. |

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.reason"></a>

```csharp
public string Reason { get; set; }
```

- *Type:* string

Reason for the current status of the safety lever.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#reason FisSafetyLeverState#reason}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

State of the safety lever. Valid values: engaged, disengaged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#status FisSafetyLeverState#status}

---

### FisSafetyLeverStateTimeouts <a name="FisSafetyLeverStateTimeouts" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FisSafetyLeverStateTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#create FisSafetyLeverState#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/fis_safety_lever_state#update FisSafetyLeverState#update}

---

## Classes <a name="Classes" id="Classes"></a>

### FisSafetyLeverStateStateList <a name="FisSafetyLeverStateStateList" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FisSafetyLeverStateStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get"></a>

```csharp
private FisSafetyLeverStateStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateList.property.internalValue"></a>

```csharp
public IResolvable|FisSafetyLeverStateState[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>[]

---


### FisSafetyLeverStateStateOutputReference <a name="FisSafetyLeverStateStateOutputReference" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FisSafetyLeverStateStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reasonInput">ReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reasonInput"></a>

```csharp
public string ReasonInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateStateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FisSafetyLeverStateState InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateState">FisSafetyLeverStateState</a>

---


### FisSafetyLeverStateTimeoutsOutputReference <a name="FisSafetyLeverStateTimeoutsOutputReference" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FisSafetyLeverStateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FisSafetyLeverStateTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.fisSafetyLeverState.FisSafetyLeverStateTimeouts">FisSafetyLeverStateTimeouts</a>

---



