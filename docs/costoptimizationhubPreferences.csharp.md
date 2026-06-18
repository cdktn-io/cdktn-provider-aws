# `costoptimizationhubPreferences` Submodule <a name="`costoptimizationhubPreferences` Submodule" id="@cdktn/provider-aws.costoptimizationhubPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostoptimizationhubPreferences <a name="CostoptimizationhubPreferences" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/costoptimizationhub_preferences aws_costoptimizationhub_preferences}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CostoptimizationhubPreferences(Construct Scope, string Id, CostoptimizationhubPreferencesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig">CostoptimizationhubPreferencesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig">CostoptimizationhubPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetMemberAccountDiscountVisibility">ResetMemberAccountDiscountVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetSavingsEstimationMode">ResetSavingsEstimationMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetMemberAccountDiscountVisibility` <a name="ResetMemberAccountDiscountVisibility" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetMemberAccountDiscountVisibility"></a>

```csharp
private void ResetMemberAccountDiscountVisibility()
```

##### `ResetSavingsEstimationMode` <a name="ResetSavingsEstimationMode" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetSavingsEstimationMode"></a>

```csharp
private void ResetSavingsEstimationMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CostoptimizationhubPreferences resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CostoptimizationhubPreferences.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CostoptimizationhubPreferences.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CostoptimizationhubPreferences.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CostoptimizationhubPreferences.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CostoptimizationhubPreferences resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CostoptimizationhubPreferences to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CostoptimizationhubPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/costoptimizationhub_preferences#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CostoptimizationhubPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibilityInput">MemberAccountDiscountVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationModeInput">SavingsEstimationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibility">MemberAccountDiscountVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationMode">SavingsEstimationMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemberAccountDiscountVisibilityInput`<sup>Optional</sup> <a name="MemberAccountDiscountVisibilityInput" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibilityInput"></a>

```csharp
public string MemberAccountDiscountVisibilityInput { get; }
```

- *Type:* string

---

##### `SavingsEstimationModeInput`<sup>Optional</sup> <a name="SavingsEstimationModeInput" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationModeInput"></a>

```csharp
public string SavingsEstimationModeInput { get; }
```

- *Type:* string

---

##### `MemberAccountDiscountVisibility`<sup>Required</sup> <a name="MemberAccountDiscountVisibility" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibility"></a>

```csharp
public string MemberAccountDiscountVisibility { get; }
```

- *Type:* string

---

##### `SavingsEstimationMode`<sup>Required</sup> <a name="SavingsEstimationMode" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationMode"></a>

```csharp
public string SavingsEstimationMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CostoptimizationhubPreferencesConfig <a name="CostoptimizationhubPreferencesConfig" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CostoptimizationhubPreferencesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MemberAccountDiscountVisibility = null,
    string SavingsEstimationMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.memberAccountDiscountVisibility">MemberAccountDiscountVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}. |
| <code><a href="#@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.savingsEstimationMode">SavingsEstimationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MemberAccountDiscountVisibility`<sup>Optional</sup> <a name="MemberAccountDiscountVisibility" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.memberAccountDiscountVisibility"></a>

```csharp
public string MemberAccountDiscountVisibility { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}.

---

##### `SavingsEstimationMode`<sup>Optional</sup> <a name="SavingsEstimationMode" id="@cdktn/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.savingsEstimationMode"></a>

```csharp
public string SavingsEstimationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}.

---



