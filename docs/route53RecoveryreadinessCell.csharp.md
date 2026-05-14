# `route53RecoveryreadinessCell` Submodule <a name="`route53RecoveryreadinessCell` Submodule" id="@cdktn/provider-aws.route53RecoveryreadinessCell"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessCell <a name="Route53RecoveryreadinessCell" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell aws_route53recoveryreadiness_cell}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoveryreadinessCell(Construct Scope, string Id, Route53RecoveryreadinessCellConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig">Route53RecoveryreadinessCellConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig">Route53RecoveryreadinessCellConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetCells">ResetCells</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTimeouts"></a>

```csharp
private void PutTimeouts(Route53RecoveryreadinessCellTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>

---

##### `ResetCells` <a name="ResetCells" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetCells"></a>

```csharp
private void ResetCells()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoveryreadinessCell resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoveryreadinessCell.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoveryreadinessCell.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoveryreadinessCell.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoveryreadinessCell.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53RecoveryreadinessCell resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoveryreadinessCell to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoveryreadinessCell that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoveryreadinessCell to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.parentReadinessScopes">ParentReadinessScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference">Route53RecoveryreadinessCellTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellNameInput">CellNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellsInput">CellsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellName">CellName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cells">Cells</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ParentReadinessScopes`<sup>Required</sup> <a name="ParentReadinessScopes" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.parentReadinessScopes"></a>

```csharp
public string[] ParentReadinessScopes { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.timeouts"></a>

```csharp
public Route53RecoveryreadinessCellTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference">Route53RecoveryreadinessCellTimeoutsOutputReference</a>

---

##### `CellNameInput`<sup>Optional</sup> <a name="CellNameInput" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellNameInput"></a>

```csharp
public string CellNameInput { get; }
```

- *Type:* string

---

##### `CellsInput`<sup>Optional</sup> <a name="CellsInput" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellsInput"></a>

```csharp
public string[] CellsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.timeoutsInput"></a>

```csharp
public IResolvable|Route53RecoveryreadinessCellTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>

---

##### `CellName`<sup>Required</sup> <a name="CellName" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cellName"></a>

```csharp
public string CellName { get; }
```

- *Type:* string

---

##### `Cells`<sup>Required</sup> <a name="Cells" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.cells"></a>

```csharp
public string[] Cells { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCell.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessCellConfig <a name="Route53RecoveryreadinessCellConfig" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoveryreadinessCellConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CellName,
    string[] Cells = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    Route53RecoveryreadinessCellTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cellName">CellName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#cell_name Route53RecoveryreadinessCell#cell_name}. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cells">Cells</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#cells Route53RecoveryreadinessCell#cells}. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#id Route53RecoveryreadinessCell#id}. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#tags Route53RecoveryreadinessCell#tags}. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#tags_all Route53RecoveryreadinessCell#tags_all}. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CellName`<sup>Required</sup> <a name="CellName" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cellName"></a>

```csharp
public string CellName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#cell_name Route53RecoveryreadinessCell#cell_name}.

---

##### `Cells`<sup>Optional</sup> <a name="Cells" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.cells"></a>

```csharp
public string[] Cells { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#cells Route53RecoveryreadinessCell#cells}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#id Route53RecoveryreadinessCell#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#tags Route53RecoveryreadinessCell#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#tags_all Route53RecoveryreadinessCell#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellConfig.property.timeouts"></a>

```csharp
public Route53RecoveryreadinessCellTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#timeouts Route53RecoveryreadinessCell#timeouts}

---

### Route53RecoveryreadinessCellTimeouts <a name="Route53RecoveryreadinessCellTimeouts" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoveryreadinessCellTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#delete Route53RecoveryreadinessCell#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/route53recoveryreadiness_cell#delete Route53RecoveryreadinessCell#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessCellTimeoutsOutputReference <a name="Route53RecoveryreadinessCellTimeoutsOutputReference" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoveryreadinessCellTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Route53RecoveryreadinessCellTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.route53RecoveryreadinessCell.Route53RecoveryreadinessCellTimeouts">Route53RecoveryreadinessCellTimeouts</a>

---



