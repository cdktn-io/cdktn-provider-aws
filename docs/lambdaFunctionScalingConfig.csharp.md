# `lambdaFunctionScalingConfig` Submodule <a name="`lambdaFunctionScalingConfig` Submodule" id="@cdktn/provider-aws.lambdaFunctionScalingConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunctionScalingConfig <a name="LambdaFunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config aws_lambda_function_scaling_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaFunctionScalingConfig(Construct Scope, string Id, LambdaFunctionScalingConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig">LambdaFunctionScalingConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig">LambdaFunctionScalingConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putFunctionScalingConfig">PutFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetFunctionScalingConfig">ResetFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFunctionScalingConfig` <a name="PutFunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putFunctionScalingConfig"></a>

```csharp
private void PutFunctionScalingConfig(IResolvable|LambdaFunctionScalingConfigFunctionScalingConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putFunctionScalingConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(LambdaFunctionScalingConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a>

---

##### `ResetFunctionScalingConfig` <a name="ResetFunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetFunctionScalingConfig"></a>

```csharp
private void ResetFunctionScalingConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaFunctionScalingConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaFunctionScalingConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaFunctionScalingConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaFunctionScalingConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdaFunctionScalingConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdaFunctionScalingConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaFunctionScalingConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaFunctionScalingConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdaFunctionScalingConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionScalingConfig">FunctionScalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList">LambdaFunctionScalingConfigFunctionScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionState">FunctionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference">LambdaFunctionScalingConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionScalingConfigInput">FunctionScalingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.qualifierInput">QualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.qualifier">Qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `FunctionScalingConfig`<sup>Required</sup> <a name="FunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionScalingConfig"></a>

```csharp
public LambdaFunctionScalingConfigFunctionScalingConfigList FunctionScalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList">LambdaFunctionScalingConfigFunctionScalingConfigList</a>

---

##### `FunctionState`<sup>Required</sup> <a name="FunctionState" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionState"></a>

```csharp
public string FunctionState { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.timeouts"></a>

```csharp
public LambdaFunctionScalingConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference">LambdaFunctionScalingConfigTimeoutsOutputReference</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `FunctionScalingConfigInput`<sup>Optional</sup> <a name="FunctionScalingConfigInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionScalingConfigInput"></a>

```csharp
public IResolvable|LambdaFunctionScalingConfigFunctionScalingConfig[] FunctionScalingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.qualifierInput"></a>

```csharp
public string QualifierInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|LambdaFunctionScalingConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a>

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.qualifier"></a>

```csharp
public string Qualifier { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionScalingConfigConfig <a name="LambdaFunctionScalingConfigConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaFunctionScalingConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FunctionName,
    string Qualifier,
    IResolvable|LambdaFunctionScalingConfigFunctionScalingConfig[] FunctionScalingConfig = null,
    string Region = null,
    LambdaFunctionScalingConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.functionName">FunctionName</a></code> | <code>string</code> | Name or ARN of the Lambda function. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.qualifier">Qualifier</a></code> | <code>string</code> | Qualifier for the scaling configuration. Valid values: $LATEST.PUBLISHED or a numeric version number. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.functionScalingConfig">FunctionScalingConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]</code> | function_scaling_config block. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Name or ARN of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#function_name LambdaFunctionScalingConfig#function_name}

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.qualifier"></a>

```csharp
public string Qualifier { get; set; }
```

- *Type:* string

Qualifier for the scaling configuration. Valid values: $LATEST.PUBLISHED or a numeric version number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#qualifier LambdaFunctionScalingConfig#qualifier}

---

##### `FunctionScalingConfig`<sup>Optional</sup> <a name="FunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.functionScalingConfig"></a>

```csharp
public IResolvable|LambdaFunctionScalingConfigFunctionScalingConfig[] FunctionScalingConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]

function_scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#function_scaling_config LambdaFunctionScalingConfig#function_scaling_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#region LambdaFunctionScalingConfig#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigConfig.property.timeouts"></a>

```csharp
public LambdaFunctionScalingConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#timeouts LambdaFunctionScalingConfig#timeouts}

---

### LambdaFunctionScalingConfigFunctionScalingConfig <a name="LambdaFunctionScalingConfigFunctionScalingConfig" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaFunctionScalingConfigFunctionScalingConfig {
    double MaxExecutionEnvironments = null,
    double MinExecutionEnvironments = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.property.maxExecutionEnvironments">MaxExecutionEnvironments</a></code> | <code>double</code> | Maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.property.minExecutionEnvironments">MinExecutionEnvironments</a></code> | <code>double</code> | Minimum number of execution environments to maintain for the function. |

---

##### `MaxExecutionEnvironments`<sup>Optional</sup> <a name="MaxExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```csharp
public double MaxExecutionEnvironments { get; set; }
```

- *Type:* double

Maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#max_execution_environments LambdaFunctionScalingConfig#max_execution_environments}

---

##### `MinExecutionEnvironments`<sup>Optional</sup> <a name="MinExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig.property.minExecutionEnvironments"></a>

```csharp
public double MinExecutionEnvironments { get; set; }
```

- *Type:* double

Minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#min_execution_environments LambdaFunctionScalingConfig#min_execution_environments}

---

### LambdaFunctionScalingConfigTimeouts <a name="LambdaFunctionScalingConfigTimeouts" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaFunctionScalingConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#create LambdaFunctionScalingConfig#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#delete LambdaFunctionScalingConfig#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/lambda_function_scaling_config#update LambdaFunctionScalingConfig#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionScalingConfigFunctionScalingConfigList <a name="LambdaFunctionScalingConfigFunctionScalingConfigList" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaFunctionScalingConfigFunctionScalingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.get"></a>

```csharp
private LambdaFunctionScalingConfigFunctionScalingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigList.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionScalingConfigFunctionScalingConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>[]

---


### LambdaFunctionScalingConfigFunctionScalingConfigOutputReference <a name="LambdaFunctionScalingConfigFunctionScalingConfigOutputReference" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaFunctionScalingConfigFunctionScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">ResetMaxExecutionEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">ResetMinExecutionEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxExecutionEnvironments` <a name="ResetMaxExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```csharp
private void ResetMaxExecutionEnvironments()
```

##### `ResetMinExecutionEnvironments` <a name="ResetMinExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```csharp
private void ResetMinExecutionEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">MaxExecutionEnvironmentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">MinExecutionEnvironmentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">MaxExecutionEnvironments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.minExecutionEnvironments">MinExecutionEnvironments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxExecutionEnvironmentsInput`<sup>Optional</sup> <a name="MaxExecutionEnvironmentsInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```csharp
public double MaxExecutionEnvironmentsInput { get; }
```

- *Type:* double

---

##### `MinExecutionEnvironmentsInput`<sup>Optional</sup> <a name="MinExecutionEnvironmentsInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```csharp
public double MinExecutionEnvironmentsInput { get; }
```

- *Type:* double

---

##### `MaxExecutionEnvironments`<sup>Required</sup> <a name="MaxExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```csharp
public double MaxExecutionEnvironments { get; }
```

- *Type:* double

---

##### `MinExecutionEnvironments`<sup>Required</sup> <a name="MinExecutionEnvironments" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```csharp
public double MinExecutionEnvironments { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionScalingConfigFunctionScalingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigFunctionScalingConfig">LambdaFunctionScalingConfigFunctionScalingConfig</a>

---


### LambdaFunctionScalingConfigTimeoutsOutputReference <a name="LambdaFunctionScalingConfigTimeoutsOutputReference" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdaFunctionScalingConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdaFunctionScalingConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdaFunctionScalingConfig.LambdaFunctionScalingConfigTimeouts">LambdaFunctionScalingConfigTimeouts</a>

---



