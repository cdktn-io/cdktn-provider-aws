# `savingsplansSavingsPlan` Submodule <a name="`savingsplansSavingsPlan` Submodule" id="@cdktn/provider-aws.savingsplansSavingsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SavingsplansSavingsPlan <a name="SavingsplansSavingsPlan" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan aws_savingsplans_savings_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SavingsplansSavingsPlan(Construct Scope, string Id, SavingsplansSavingsPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig">SavingsplansSavingsPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig">SavingsplansSavingsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime">ResetPurchaseTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount">ResetUpfrontPaymentAmount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts"></a>

```csharp
private void PutTimeouts(SavingsplansSavingsPlanTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---

##### `ResetPurchaseTime` <a name="ResetPurchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime"></a>

```csharp
private void ResetPurchaseTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpfrontPaymentAmount` <a name="ResetUpfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount"></a>

```csharp
private void ResetUpfrontPaymentAmount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SavingsplansSavingsPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SavingsplansSavingsPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SavingsplansSavingsPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SavingsplansSavingsPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SavingsplansSavingsPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SavingsplansSavingsPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SavingsplansSavingsPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SavingsplansSavingsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SavingsplansSavingsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency">Currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily">Ec2InstanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId">OfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption">PaymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes">ProductTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount">RecurringPaymentAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil">ReturnableUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn">SavingsPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId">SavingsPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType">SavingsPlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds">TermDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput">CommitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput">PurchaseTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput">SavingsPlanOfferingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput">UpfrontPaymentAmountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment">Commitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime">PurchaseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId">SavingsPlanOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount">UpfrontPaymentAmount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency"></a>

```csharp
public string Currency { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Ec2InstanceFamily`<sup>Required</sup> <a name="Ec2InstanceFamily" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily"></a>

```csharp
public string Ec2InstanceFamily { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId"></a>

```csharp
public string OfferingId { get; }
```

- *Type:* string

---

##### `PaymentOption`<sup>Required</sup> <a name="PaymentOption" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption"></a>

```csharp
public string PaymentOption { get; }
```

- *Type:* string

---

##### `ProductTypes`<sup>Required</sup> <a name="ProductTypes" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes"></a>

```csharp
public string[] ProductTypes { get; }
```

- *Type:* string[]

---

##### `RecurringPaymentAmount`<sup>Required</sup> <a name="RecurringPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount"></a>

```csharp
public string RecurringPaymentAmount { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReturnableUntil`<sup>Required</sup> <a name="ReturnableUntil" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil"></a>

```csharp
public string ReturnableUntil { get; }
```

- *Type:* string

---

##### `SavingsPlanArn`<sup>Required</sup> <a name="SavingsPlanArn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn"></a>

```csharp
public string SavingsPlanArn { get; }
```

- *Type:* string

---

##### `SavingsPlanId`<sup>Required</sup> <a name="SavingsPlanId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId"></a>

```csharp
public string SavingsPlanId { get; }
```

- *Type:* string

---

##### `SavingsPlanType`<sup>Required</sup> <a name="SavingsPlanType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType"></a>

```csharp
public string SavingsPlanType { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TermDurationInSeconds`<sup>Required</sup> <a name="TermDurationInSeconds" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds"></a>

```csharp
public double TermDurationInSeconds { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts"></a>

```csharp
public SavingsplansSavingsPlanTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a>

---

##### `CommitmentInput`<sup>Optional</sup> <a name="CommitmentInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput"></a>

```csharp
public string CommitmentInput { get; }
```

- *Type:* string

---

##### `PurchaseTimeInput`<sup>Optional</sup> <a name="PurchaseTimeInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput"></a>

```csharp
public string PurchaseTimeInput { get; }
```

- *Type:* string

---

##### `SavingsPlanOfferingIdInput`<sup>Optional</sup> <a name="SavingsPlanOfferingIdInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput"></a>

```csharp
public string SavingsPlanOfferingIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput"></a>

```csharp
public IResolvable|SavingsplansSavingsPlanTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---

##### `UpfrontPaymentAmountInput`<sup>Optional</sup> <a name="UpfrontPaymentAmountInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput"></a>

```csharp
public string UpfrontPaymentAmountInput { get; }
```

- *Type:* string

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment"></a>

```csharp
public string Commitment { get; }
```

- *Type:* string

---

##### `PurchaseTime`<sup>Required</sup> <a name="PurchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime"></a>

```csharp
public string PurchaseTime { get; }
```

- *Type:* string

---

##### `SavingsPlanOfferingId`<sup>Required</sup> <a name="SavingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId"></a>

```csharp
public string SavingsPlanOfferingId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpfrontPaymentAmount`<sup>Required</sup> <a name="UpfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount"></a>

```csharp
public string UpfrontPaymentAmount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SavingsplansSavingsPlanConfig <a name="SavingsplansSavingsPlanConfig" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SavingsplansSavingsPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Commitment,
    string SavingsPlanOfferingId,
    string PurchaseTime = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SavingsplansSavingsPlanTimeouts Timeouts = null,
    string UpfrontPaymentAmount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment">Commitment</a></code> | <code>string</code> | The hourly commitment, in USD. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId">SavingsPlanOfferingId</a></code> | <code>string</code> | The unique ID of a Savings Plan offering. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime">PurchaseTime</a></code> | <code>string</code> | The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount">UpfrontPaymentAmount</a></code> | <code>string</code> | The up-front payment amount. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment"></a>

```csharp
public string Commitment { get; set; }
```

- *Type:* string

The hourly commitment, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#commitment SavingsplansSavingsPlan#commitment}

---

##### `SavingsPlanOfferingId`<sup>Required</sup> <a name="SavingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId"></a>

```csharp
public string SavingsPlanOfferingId { get; set; }
```

- *Type:* string

The unique ID of a Savings Plan offering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#savings_plan_offering_id SavingsplansSavingsPlan#savings_plan_offering_id}

---

##### `PurchaseTime`<sup>Optional</sup> <a name="PurchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime"></a>

```csharp
public string PurchaseTime { get; set; }
```

- *Type:* string

The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#purchase_time SavingsplansSavingsPlan#purchase_time}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts"></a>

```csharp
public SavingsplansSavingsPlanTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#timeouts SavingsplansSavingsPlan#timeouts}

---

##### `UpfrontPaymentAmount`<sup>Optional</sup> <a name="UpfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount"></a>

```csharp
public string UpfrontPaymentAmount { get; set; }
```

- *Type:* string

The up-front payment amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#upfront_payment_amount SavingsplansSavingsPlan#upfront_payment_amount}

---

### SavingsplansSavingsPlanTimeouts <a name="SavingsplansSavingsPlanTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SavingsplansSavingsPlanTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#create SavingsplansSavingsPlan#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/savingsplans_savings_plan#delete SavingsplansSavingsPlan#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### SavingsplansSavingsPlanTimeoutsOutputReference <a name="SavingsplansSavingsPlanTimeoutsOutputReference" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SavingsplansSavingsPlanTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SavingsplansSavingsPlanTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---



