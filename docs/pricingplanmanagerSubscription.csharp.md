# `pricingplanmanagerSubscription` Submodule <a name="`pricingplanmanagerSubscription` Submodule" id="@cdktn/provider-aws.pricingplanmanagerSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PricingplanmanagerSubscription <a name="PricingplanmanagerSubscription" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription aws_pricingplanmanager_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PricingplanmanagerSubscription(Construct Scope, string Id, PricingplanmanagerSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig">PricingplanmanagerSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig">PricingplanmanagerSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode">ResetApprovalMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel">ResetUsageLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(PricingplanmanagerSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---

##### `ResetApprovalMode` <a name="ResetApprovalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode"></a>

```csharp
private void ResetApprovalMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsageLevel` <a name="ResetUsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel"></a>

```csharp
private void ResetUsageLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PricingplanmanagerSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PricingplanmanagerSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PricingplanmanagerSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PricingplanmanagerSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PricingplanmanagerSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PricingplanmanagerSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PricingplanmanagerSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange">ScheduledChange</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput">ApprovalModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput">PlanFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput">PlanTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput">UsageLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode">ApprovalMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily">PlanFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier">PlanTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel">UsageLevel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ScheduledChange`<sup>Required</sup> <a name="ScheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange"></a>

```csharp
public PricingplanmanagerSubscriptionScheduledChangeList ScheduledChange { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts"></a>

```csharp
public PricingplanmanagerSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a>

---

##### `ApprovalModeInput`<sup>Optional</sup> <a name="ApprovalModeInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput"></a>

```csharp
public string ApprovalModeInput { get; }
```

- *Type:* string

---

##### `PlanFamilyInput`<sup>Optional</sup> <a name="PlanFamilyInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput"></a>

```csharp
public string PlanFamilyInput { get; }
```

- *Type:* string

---

##### `PlanTierInput`<sup>Optional</sup> <a name="PlanTierInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput"></a>

```csharp
public string PlanTierInput { get; }
```

- *Type:* string

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput"></a>

```csharp
public string[] ResourceArnsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput"></a>

```csharp
public IResolvable|PricingplanmanagerSubscriptionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---

##### `UsageLevelInput`<sup>Optional</sup> <a name="UsageLevelInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput"></a>

```csharp
public string UsageLevelInput { get; }
```

- *Type:* string

---

##### `ApprovalMode`<sup>Required</sup> <a name="ApprovalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode"></a>

```csharp
public string ApprovalMode { get; }
```

- *Type:* string

---

##### `PlanFamily`<sup>Required</sup> <a name="PlanFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily"></a>

```csharp
public string PlanFamily { get; }
```

- *Type:* string

---

##### `PlanTier`<sup>Required</sup> <a name="PlanTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier"></a>

```csharp
public string PlanTier { get; }
```

- *Type:* string

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; }
```

- *Type:* string[]

---

##### `UsageLevel`<sup>Required</sup> <a name="UsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel"></a>

```csharp
public string UsageLevel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PricingplanmanagerSubscriptionConfig <a name="PricingplanmanagerSubscriptionConfig" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PricingplanmanagerSubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PlanFamily,
    string PlanTier,
    string[] ResourceArns,
    string ApprovalMode = null,
    PricingplanmanagerSubscriptionTimeouts Timeouts = null,
    string UsageLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily">PlanFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier">PlanTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode">ApprovalMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel">UsageLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PlanFamily`<sup>Required</sup> <a name="PlanFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily"></a>

```csharp
public string PlanFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}.

---

##### `PlanTier`<sup>Required</sup> <a name="PlanTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier"></a>

```csharp
public string PlanTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}.

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}.

---

##### `ApprovalMode`<sup>Optional</sup> <a name="ApprovalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode"></a>

```csharp
public string ApprovalMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts"></a>

```csharp
public PricingplanmanagerSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#timeouts PricingplanmanagerSubscription#timeouts}

---

##### `UsageLevel`<sup>Optional</sup> <a name="UsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel"></a>

```csharp
public string UsageLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}.

---

### PricingplanmanagerSubscriptionScheduledChange <a name="PricingplanmanagerSubscriptionScheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PricingplanmanagerSubscriptionScheduledChange {

};
```


### PricingplanmanagerSubscriptionTimeouts <a name="PricingplanmanagerSubscriptionTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PricingplanmanagerSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#create PricingplanmanagerSubscription#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#delete PricingplanmanagerSubscription#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/pricingplanmanager_subscription#update PricingplanmanagerSubscription#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PricingplanmanagerSubscriptionScheduledChangeList <a name="PricingplanmanagerSubscriptionScheduledChangeList" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PricingplanmanagerSubscriptionScheduledChangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get"></a>

```csharp
private PricingplanmanagerSubscriptionScheduledChangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PricingplanmanagerSubscriptionScheduledChangeOutputReference <a name="PricingplanmanagerSubscriptionScheduledChangeOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PricingplanmanagerSubscriptionScheduledChangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType">ChangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate">EffectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier">PlanTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel">UsageLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeType`<sup>Required</sup> <a name="ChangeType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType"></a>

```csharp
public string ChangeType { get; }
```

- *Type:* string

---

##### `EffectiveDate`<sup>Required</sup> <a name="EffectiveDate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate"></a>

```csharp
public string EffectiveDate { get; }
```

- *Type:* string

---

##### `PlanTier`<sup>Required</sup> <a name="PlanTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier"></a>

```csharp
public string PlanTier { get; }
```

- *Type:* string

---

##### `UsageLevel`<sup>Required</sup> <a name="UsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel"></a>

```csharp
public string UsageLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue"></a>

```csharp
public PricingplanmanagerSubscriptionScheduledChange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a>

---


### PricingplanmanagerSubscriptionTimeoutsOutputReference <a name="PricingplanmanagerSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PricingplanmanagerSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PricingplanmanagerSubscriptionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---



