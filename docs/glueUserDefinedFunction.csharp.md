# `glueUserDefinedFunction` Submodule <a name="`glueUserDefinedFunction` Submodule" id="@cdktn/provider-aws.glueUserDefinedFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueUserDefinedFunction <a name="GlueUserDefinedFunction" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function aws_glue_user_defined_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueUserDefinedFunction(Construct Scope, string Id, GlueUserDefinedFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig">GlueUserDefinedFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig">GlueUserDefinedFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris">PutResourceUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris">ResetResourceUris</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceUris` <a name="PutResourceUris" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris"></a>

```csharp
private void PutResourceUris(IResolvable|GlueUserDefinedFunctionResourceUris[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>[]

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceUris` <a name="ResetResourceUris" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris"></a>

```csharp
private void ResetResourceUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueUserDefinedFunction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GlueUserDefinedFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GlueUserDefinedFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GlueUserDefinedFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GlueUserDefinedFunction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueUserDefinedFunction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueUserDefinedFunction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueUserDefinedFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueUserDefinedFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris">ResourceUris</a></code> | <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput">ClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput">OwnerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput">OwnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput">ResourceUrisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName">OwnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType">OwnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ResourceUris`<sup>Required</sup> <a name="ResourceUris" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris"></a>

```csharp
public GlueUserDefinedFunctionResourceUrisList ResourceUris { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput"></a>

```csharp
public string ClassNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerNameInput`<sup>Optional</sup> <a name="OwnerNameInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput"></a>

```csharp
public string OwnerNameInput { get; }
```

- *Type:* string

---

##### `OwnerTypeInput`<sup>Optional</sup> <a name="OwnerTypeInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput"></a>

```csharp
public string OwnerTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceUrisInput`<sup>Optional</sup> <a name="ResourceUrisInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput"></a>

```csharp
public IResolvable|GlueUserDefinedFunctionResourceUris[] ResourceUrisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>[]

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerName`<sup>Required</sup> <a name="OwnerName" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName"></a>

```csharp
public string OwnerName { get; }
```

- *Type:* string

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType"></a>

```csharp
public string OwnerType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueUserDefinedFunctionConfig <a name="GlueUserDefinedFunctionConfig" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueUserDefinedFunctionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClassName,
    string DatabaseName,
    string Name,
    string OwnerName,
    string OwnerType,
    string CatalogId = null,
    string Id = null,
    string Region = null,
    IResolvable|GlueUserDefinedFunctionResourceUris[] ResourceUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className">ClassName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#name GlueUserDefinedFunction#name}. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName">OwnerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType">OwnerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#id GlueUserDefinedFunction#id}. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris">ResourceUris</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>[]</code> | resource_uris block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className"></a>

```csharp
public string ClassName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#name GlueUserDefinedFunction#name}.

---

##### `OwnerName`<sup>Required</sup> <a name="OwnerName" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName"></a>

```csharp
public string OwnerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}.

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType"></a>

```csharp
public string OwnerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#id GlueUserDefinedFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#region GlueUserDefinedFunction#region}

---

##### `ResourceUris`<sup>Optional</sup> <a name="ResourceUris" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris"></a>

```csharp
public IResolvable|GlueUserDefinedFunctionResourceUris[] ResourceUris { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>[]

resource_uris block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}

---

### GlueUserDefinedFunctionResourceUris <a name="GlueUserDefinedFunctionResourceUris" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueUserDefinedFunctionResourceUris {
    string ResourceType,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#uri GlueUserDefinedFunction#uri}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_user_defined_function#uri GlueUserDefinedFunction#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueUserDefinedFunctionResourceUrisList <a name="GlueUserDefinedFunctionResourceUrisList" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueUserDefinedFunctionResourceUrisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get"></a>

```csharp
private GlueUserDefinedFunctionResourceUrisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue"></a>

```csharp
public IResolvable|GlueUserDefinedFunctionResourceUris[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>[]

---


### GlueUserDefinedFunctionResourceUrisOutputReference <a name="GlueUserDefinedFunctionResourceUrisOutputReference" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GlueUserDefinedFunctionResourceUrisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueUserDefinedFunctionResourceUris InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris">GlueUserDefinedFunctionResourceUris</a>

---



