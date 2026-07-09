# `appautoscalingScheduledAction` Submodule <a name="`appautoscalingScheduledAction` Submodule" id="@cdktn/provider-aws.appautoscalingScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingScheduledAction <a name="AppautoscalingScheduledAction" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action aws_appautoscaling_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppautoscalingScheduledAction(Construct Scope, string Id, AppautoscalingScheduledActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig">AppautoscalingScheduledActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig">AppautoscalingScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction">PutScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScalableTargetAction` <a name="PutScalableTargetAction" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction"></a>

```csharp
private void PutScalableTargetAction(AppautoscalingScheduledActionScalableTargetAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.putScalableTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppautoscalingScheduledAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppautoscalingScheduledAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppautoscalingScheduledAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppautoscalingScheduledAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

AppautoscalingScheduledAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppautoscalingScheduledAction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppautoscalingScheduledAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppautoscalingScheduledAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppautoscalingScheduledAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetAction">ScalableTargetAction</a></code> | <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference">AppautoscalingScheduledActionScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimensionInput">ScalableDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetActionInput">ScalableTargetActionInput</a></code> | <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespaceInput">ServiceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimension">ScalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ScalableTargetAction`<sup>Required</sup> <a name="ScalableTargetAction" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetAction"></a>

```csharp
public AppautoscalingScheduledActionScalableTargetActionOutputReference ScalableTargetAction { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference">AppautoscalingScheduledActionScalableTargetActionOutputReference</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ScalableDimensionInput`<sup>Optional</sup> <a name="ScalableDimensionInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimensionInput"></a>

```csharp
public string ScalableDimensionInput { get; }
```

- *Type:* string

---

##### `ScalableTargetActionInput`<sup>Optional</sup> <a name="ScalableTargetActionInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableTargetActionInput"></a>

```csharp
public AppautoscalingScheduledActionScalableTargetAction ScalableTargetActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `ServiceNamespaceInput`<sup>Optional</sup> <a name="ServiceNamespaceInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespaceInput"></a>

```csharp
public string ServiceNamespaceInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.scalableDimension"></a>

```csharp
public string ScalableDimension { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingScheduledActionConfig <a name="AppautoscalingScheduledActionConfig" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppautoscalingScheduledActionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ResourceId,
    string ScalableDimension,
    AppautoscalingScheduledActionScalableTargetAction ScalableTargetAction,
    string Schedule,
    string ServiceNamespace,
    string EndTime = null,
    string Id = null,
    string Region = null,
    string StartTime = null,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableDimension">ScalableDimension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableTargetAction">ScalableTargetAction</a></code> | <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | scalable_target_action block. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#name AppautoscalingScheduledAction#name}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#resource_id AppautoscalingScheduledAction#resource_id}.

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableDimension"></a>

```csharp
public string ScalableDimension { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}.

---

##### `ScalableTargetAction`<sup>Required</sup> <a name="ScalableTargetAction" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.scalableTargetAction"></a>

```csharp
public AppautoscalingScheduledActionScalableTargetAction ScalableTargetAction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

scalable_target_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#schedule AppautoscalingScheduledAction#schedule}.

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#service_namespace AppautoscalingScheduledAction#service_namespace}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#end_time AppautoscalingScheduledAction#end_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#id AppautoscalingScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#region AppautoscalingScheduledAction#region}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#start_time AppautoscalingScheduledAction#start_time}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#timezone AppautoscalingScheduledAction#timezone}.

---

### AppautoscalingScheduledActionScalableTargetAction <a name="AppautoscalingScheduledActionScalableTargetAction" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppautoscalingScheduledActionScalableTargetAction {
    string MaxCapacity = null,
    string MinCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.maxCapacity">MaxCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.minCapacity">MinCapacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}. |

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.maxCapacity"></a>

```csharp
public string MaxCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#max_capacity AppautoscalingScheduledAction#max_capacity}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction.property.minCapacity"></a>

```csharp
public string MinCapacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/appautoscaling_scheduled_action#min_capacity AppautoscalingScheduledAction#min_capacity}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingScheduledActionScalableTargetActionOutputReference <a name="AppautoscalingScheduledActionScalableTargetActionOutputReference" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new AppautoscalingScheduledActionScalableTargetActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacity">MinCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacityInput"></a>

```csharp
public string MaxCapacityInput { get; }
```

- *Type:* string

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacityInput"></a>

```csharp
public string MinCapacityInput { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.maxCapacity"></a>

```csharp
public string MaxCapacity { get; }
```

- *Type:* string

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.minCapacity"></a>

```csharp
public string MinCapacity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetActionOutputReference.property.internalValue"></a>

```csharp
public AppautoscalingScheduledActionScalableTargetAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.appautoscalingScheduledAction.AppautoscalingScheduledActionScalableTargetAction">AppautoscalingScheduledActionScalableTargetAction</a>

---



