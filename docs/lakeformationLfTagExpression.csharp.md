# `lakeformationLfTagExpression` Submodule <a name="`lakeformationLfTagExpression` Submodule" id="@cdktn/provider-aws.lakeformationLfTagExpression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationLfTagExpression <a name="LakeformationLfTagExpression" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression aws_lakeformation_lf_tag_expression}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LakeformationLfTagExpression(Construct Scope, string Id, LakeformationLfTagExpressionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig">LakeformationLfTagExpressionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig">LakeformationLfTagExpressionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExpression` <a name="PutExpression" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression"></a>

```csharp
private void PutExpression(IResolvable|LakeformationLfTagExpressionExpression[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationLfTagExpression resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LakeformationLfTagExpression.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LakeformationLfTagExpression.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LakeformationLfTagExpression.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LakeformationLfTagExpression.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LakeformationLfTagExpression resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationLfTagExpression to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationLfTagExpression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationLfTagExpression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expression">Expression</a></code> | <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList">LakeformationLfTagExpressionExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expressionInput">ExpressionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expression"></a>

```csharp
public LakeformationLfTagExpressionExpressionList Expression { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList">LakeformationLfTagExpressionExpressionList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expressionInput"></a>

```csharp
public IResolvable|LakeformationLfTagExpressionExpression[] ExpressionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationLfTagExpressionConfig <a name="LakeformationLfTagExpressionConfig" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LakeformationLfTagExpressionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string CatalogId = null,
    string Description = null,
    IResolvable|LakeformationLfTagExpressionExpression[] Expression = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.name">Name</a></code> | <code>string</code> | The name of the LF-Tag Expression. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | The ID of the Data Catalog. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.description">Description</a></code> | <code>string</code> | A description of the LF-Tag Expression. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.expression">Expression</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]</code> | expression block. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the LF-Tag Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#name LakeformationLfTagExpression#name}

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The ID of the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#catalog_id LakeformationLfTagExpression#catalog_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the LF-Tag Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#description LakeformationLfTagExpression#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.expression"></a>

```csharp
public IResolvable|LakeformationLfTagExpressionExpression[] Expression { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#expression LakeformationLfTagExpression#expression}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#region LakeformationLfTagExpression#region}

---

### LakeformationLfTagExpressionExpression <a name="LakeformationLfTagExpressionExpression" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LakeformationLfTagExpressionExpression {
    string TagKey,
    string[] TagValues
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#tag_key LakeformationLfTagExpression#tag_key}. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagValues">TagValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#tag_values LakeformationLfTagExpression#tag_values}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#tag_key LakeformationLfTagExpression#tag_key}.

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagValues"></a>

```csharp
public string[] TagValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lakeformation_lf_tag_expression#tag_values LakeformationLfTagExpression#tag_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationLfTagExpressionExpressionList <a name="LakeformationLfTagExpressionExpressionList" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LakeformationLfTagExpressionExpressionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get"></a>

```csharp
private LakeformationLfTagExpressionExpressionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.internalValue"></a>

```csharp
public IResolvable|LakeformationLfTagExpressionExpression[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]

---


### LakeformationLfTagExpressionExpressionOutputReference <a name="LakeformationLfTagExpressionExpressionOutputReference" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LakeformationLfTagExpressionExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValues">TagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValuesInput"></a>

```csharp
public string[] TagValuesInput { get; }
```

- *Type:* string[]

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValues"></a>

```csharp
public string[] TagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LakeformationLfTagExpressionExpression InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>

---



