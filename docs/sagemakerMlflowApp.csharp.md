# `sagemakerMlflowApp` Submodule <a name="`sagemakerMlflowApp` Submodule" id="@cdktn/provider-aws.sagemakerMlflowApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowApp <a name="SagemakerMlflowApp" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app aws_sagemaker_mlflow_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerMlflowApp(Construct Scope, string Id, SagemakerMlflowAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig">SagemakerMlflowAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig">SagemakerMlflowAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetAccountDefaultStatus">ResetAccountDefaultStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetDefaultDomainIdList">ResetDefaultDomainIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode">ResetModelRegistrationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart">ResetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts"></a>

```csharp
private void PutTimeouts(SagemakerMlflowAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

---

##### `ResetAccountDefaultStatus` <a name="ResetAccountDefaultStatus" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetAccountDefaultStatus"></a>

```csharp
private void ResetAccountDefaultStatus()
```

##### `ResetDefaultDomainIdList` <a name="ResetDefaultDomainIdList" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetDefaultDomainIdList"></a>

```csharp
private void ResetDefaultDomainIdList()
```

##### `ResetModelRegistrationMode` <a name="ResetModelRegistrationMode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetModelRegistrationMode"></a>

```csharp
private void ResetModelRegistrationMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeklyMaintenanceWindowStart` <a name="ResetWeeklyMaintenanceWindowStart" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.resetWeeklyMaintenanceWindowStart"></a>

```csharp
private void ResetWeeklyMaintenanceWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerMlflowApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerMlflowApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerMlflowApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerMlflowApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerMlflowApp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerMlflowApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerMlflowApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference">SagemakerMlflowAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatusInput">AccountDefaultStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput">ArtifactStoreUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdListInput">DefaultDomainIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput">ModelRegistrationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput">WeeklyMaintenanceWindowStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatus">AccountDefaultStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri">ArtifactStoreUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdList">DefaultDomainIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode">ModelRegistrationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeouts"></a>

```csharp
public SagemakerMlflowAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference">SagemakerMlflowAppTimeoutsOutputReference</a>

---

##### `AccountDefaultStatusInput`<sup>Optional</sup> <a name="AccountDefaultStatusInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatusInput"></a>

```csharp
public string AccountDefaultStatusInput { get; }
```

- *Type:* string

---

##### `ArtifactStoreUriInput`<sup>Optional</sup> <a name="ArtifactStoreUriInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUriInput"></a>

```csharp
public string ArtifactStoreUriInput { get; }
```

- *Type:* string

---

##### `DefaultDomainIdListInput`<sup>Optional</sup> <a name="DefaultDomainIdListInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdListInput"></a>

```csharp
public string[] DefaultDomainIdListInput { get; }
```

- *Type:* string[]

---

##### `ModelRegistrationModeInput`<sup>Optional</sup> <a name="ModelRegistrationModeInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationModeInput"></a>

```csharp
public string ModelRegistrationModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.timeoutsInput"></a>

```csharp
public IResolvable|SagemakerMlflowAppTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

---

##### `WeeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStartInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStartInput"></a>

```csharp
public string WeeklyMaintenanceWindowStartInput { get; }
```

- *Type:* string

---

##### `AccountDefaultStatus`<sup>Required</sup> <a name="AccountDefaultStatus" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.accountDefaultStatus"></a>

```csharp
public string AccountDefaultStatus { get; }
```

- *Type:* string

---

##### `ArtifactStoreUri`<sup>Required</sup> <a name="ArtifactStoreUri" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.artifactStoreUri"></a>

```csharp
public string ArtifactStoreUri { get; }
```

- *Type:* string

---

##### `DefaultDomainIdList`<sup>Required</sup> <a name="DefaultDomainIdList" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.defaultDomainIdList"></a>

```csharp
public string[] DefaultDomainIdList { get; }
```

- *Type:* string[]

---

##### `ModelRegistrationMode`<sup>Required</sup> <a name="ModelRegistrationMode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.modelRegistrationMode"></a>

```csharp
public string ModelRegistrationMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WeeklyMaintenanceWindowStart`<sup>Required</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowAppConfig <a name="SagemakerMlflowAppConfig" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerMlflowAppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ArtifactStoreUri,
    string Name,
    string RoleArn,
    string AccountDefaultStatus = null,
    string[] DefaultDomainIdList = null,
    string ModelRegistrationMode = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SagemakerMlflowAppTimeouts Timeouts = null,
    string WeeklyMaintenanceWindowStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri">ArtifactStoreUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.accountDefaultStatus">AccountDefaultStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.defaultDomainIdList">DefaultDomainIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode">ModelRegistrationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ArtifactStoreUri`<sup>Required</sup> <a name="ArtifactStoreUri" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.artifactStoreUri"></a>

```csharp
public string ArtifactStoreUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#artifact_store_uri SagemakerMlflowApp#artifact_store_uri}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#name SagemakerMlflowApp#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#role_arn SagemakerMlflowApp#role_arn}.

---

##### `AccountDefaultStatus`<sup>Optional</sup> <a name="AccountDefaultStatus" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.accountDefaultStatus"></a>

```csharp
public string AccountDefaultStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#account_default_status SagemakerMlflowApp#account_default_status}.

---

##### `DefaultDomainIdList`<sup>Optional</sup> <a name="DefaultDomainIdList" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.defaultDomainIdList"></a>

```csharp
public string[] DefaultDomainIdList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#default_domain_id_list SagemakerMlflowApp#default_domain_id_list}.

---

##### `ModelRegistrationMode`<sup>Optional</sup> <a name="ModelRegistrationMode" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.modelRegistrationMode"></a>

```csharp
public string ModelRegistrationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#model_registration_mode SagemakerMlflowApp#model_registration_mode}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#region SagemakerMlflowApp#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#tags SagemakerMlflowApp#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.timeouts"></a>

```csharp
public SagemakerMlflowAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#timeouts SagemakerMlflowApp#timeouts}

---

##### `WeeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppConfig.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#weekly_maintenance_window_start SagemakerMlflowApp#weekly_maintenance_window_start}.

---

### SagemakerMlflowAppTimeouts <a name="SagemakerMlflowAppTimeouts" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerMlflowAppTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#create SagemakerMlflowApp#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#delete SagemakerMlflowApp#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_mlflow_app#update SagemakerMlflowApp#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowAppTimeoutsOutputReference <a name="SagemakerMlflowAppTimeoutsOutputReference" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerMlflowAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerMlflowAppTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerMlflowApp.SagemakerMlflowAppTimeouts">SagemakerMlflowAppTimeouts</a>

---



