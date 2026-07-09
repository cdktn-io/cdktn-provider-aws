# `datazoneGlossaryTerm` Submodule <a name="`datazoneGlossaryTerm` Submodule" id="@cdktn/provider-aws.datazoneGlossaryTerm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneGlossaryTerm <a name="DatazoneGlossaryTerm" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term aws_datazone_glossary_term}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazoneGlossaryTerm(Construct Scope, string Id, DatazoneGlossaryTermConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig">DatazoneGlossaryTermConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig">DatazoneGlossaryTermConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations">PutTermRelations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier">ResetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription">ResetLongDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription">ResetShortDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations">ResetTermRelations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTermRelations` <a name="PutTermRelations" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations"></a>

```csharp
private void PutTermRelations(IResolvable|DatazoneGlossaryTermTermRelations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTermRelations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts"></a>

```csharp
private void PutTimeouts(DatazoneGlossaryTermTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---

##### `ResetDomainIdentifier` <a name="ResetDomainIdentifier" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetDomainIdentifier"></a>

```csharp
private void ResetDomainIdentifier()
```

##### `ResetLongDescription` <a name="ResetLongDescription" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetLongDescription"></a>

```csharp
private void ResetLongDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetShortDescription` <a name="ResetShortDescription" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetShortDescription"></a>

```csharp
private void ResetShortDescription()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTermRelations` <a name="ResetTermRelations" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTermRelations"></a>

```csharp
private void ResetTermRelations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneGlossaryTerm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatazoneGlossaryTerm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatazoneGlossaryTerm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatazoneGlossaryTerm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DatazoneGlossaryTerm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazoneGlossaryTerm resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneGlossaryTerm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneGlossaryTerm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneGlossaryTerm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations">TermRelations</a></code> | <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput">GlossaryIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput">LongDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput">TermRelationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier">GlossaryIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription">LongDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription">ShortDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TermRelations`<sup>Required</sup> <a name="TermRelations" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelations"></a>

```csharp
public DatazoneGlossaryTermTermRelationsList TermRelations { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList">DatazoneGlossaryTermTermRelationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeouts"></a>

```csharp
public DatazoneGlossaryTermTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference">DatazoneGlossaryTermTimeoutsOutputReference</a>

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `GlossaryIdentifierInput`<sup>Optional</sup> <a name="GlossaryIdentifierInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifierInput"></a>

```csharp
public string GlossaryIdentifierInput { get; }
```

- *Type:* string

---

##### `LongDescriptionInput`<sup>Optional</sup> <a name="LongDescriptionInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescriptionInput"></a>

```csharp
public string LongDescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescriptionInput"></a>

```csharp
public string ShortDescriptionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TermRelationsInput`<sup>Optional</sup> <a name="TermRelationsInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.termRelationsInput"></a>

```csharp
public IResolvable|DatazoneGlossaryTermTermRelations[] TermRelationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.timeoutsInput"></a>

```csharp
public IResolvable|DatazoneGlossaryTermTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `GlossaryIdentifier`<sup>Required</sup> <a name="GlossaryIdentifier" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.glossaryIdentifier"></a>

```csharp
public string GlossaryIdentifier { get; }
```

- *Type:* string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.longDescription"></a>

```csharp
public string LongDescription { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.shortDescription"></a>

```csharp
public string ShortDescription { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTerm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneGlossaryTermConfig <a name="DatazoneGlossaryTermConfig" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazoneGlossaryTermConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GlossaryIdentifier,
    string Name,
    string DomainIdentifier = null,
    string LongDescription = null,
    string Region = null,
    string ShortDescription = null,
    string Status = null,
    IResolvable|DatazoneGlossaryTermTermRelations[] TermRelations = null,
    DatazoneGlossaryTermTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier">GlossaryIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription">LongDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription">ShortDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations">TermRelations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]</code> | term_relations block. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GlossaryIdentifier`<sup>Required</sup> <a name="GlossaryIdentifier" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.glossaryIdentifier"></a>

```csharp
public string GlossaryIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#glossary_identifier DatazoneGlossaryTerm#glossary_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#name DatazoneGlossaryTerm#name}.

---

##### `DomainIdentifier`<sup>Optional</sup> <a name="DomainIdentifier" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#domain_identifier DatazoneGlossaryTerm#domain_identifier}.

---

##### `LongDescription`<sup>Optional</sup> <a name="LongDescription" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.longDescription"></a>

```csharp
public string LongDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#long_description DatazoneGlossaryTerm#long_description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#region DatazoneGlossaryTerm#region}

---

##### `ShortDescription`<sup>Optional</sup> <a name="ShortDescription" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.shortDescription"></a>

```csharp
public string ShortDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#short_description DatazoneGlossaryTerm#short_description}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#status DatazoneGlossaryTerm#status}.

---

##### `TermRelations`<sup>Optional</sup> <a name="TermRelations" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.termRelations"></a>

```csharp
public IResolvable|DatazoneGlossaryTermTermRelations[] TermRelations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]

term_relations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#term_relations DatazoneGlossaryTerm#term_relations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermConfig.property.timeouts"></a>

```csharp
public DatazoneGlossaryTermTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#timeouts DatazoneGlossaryTerm#timeouts}

---

### DatazoneGlossaryTermTermRelations <a name="DatazoneGlossaryTermTermRelations" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazoneGlossaryTermTermRelations {
    string[] Classifies = null,
    string[] IsA = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies">Classifies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA">IsA</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}. |

---

##### `Classifies`<sup>Optional</sup> <a name="Classifies" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.classifies"></a>

```csharp
public string[] Classifies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#classifies DatazoneGlossaryTerm#classifies}.

---

##### `IsA`<sup>Optional</sup> <a name="IsA" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations.property.isA"></a>

```csharp
public string[] IsA { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#is_a DatazoneGlossaryTerm#is_a}.

---

### DatazoneGlossaryTermTimeouts <a name="DatazoneGlossaryTermTimeouts" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazoneGlossaryTermTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/datazone_glossary_term#create DatazoneGlossaryTerm#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneGlossaryTermTermRelationsList <a name="DatazoneGlossaryTermTermRelationsList" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazoneGlossaryTermTermRelationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get"></a>

```csharp
private DatazoneGlossaryTermTermRelationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneGlossaryTermTermRelations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>[]

---


### DatazoneGlossaryTermTermRelationsOutputReference <a name="DatazoneGlossaryTermTermRelationsOutputReference" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazoneGlossaryTermTermRelationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies">ResetClassifies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA">ResetIsA</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassifies` <a name="ResetClassifies" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetClassifies"></a>

```csharp
private void ResetClassifies()
```

##### `ResetIsA` <a name="ResetIsA" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.resetIsA"></a>

```csharp
private void ResetIsA()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput">ClassifiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput">IsAInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies">Classifies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA">IsA</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassifiesInput`<sup>Optional</sup> <a name="ClassifiesInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifiesInput"></a>

```csharp
public string[] ClassifiesInput { get; }
```

- *Type:* string[]

---

##### `IsAInput`<sup>Optional</sup> <a name="IsAInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isAInput"></a>

```csharp
public string[] IsAInput { get; }
```

- *Type:* string[]

---

##### `Classifies`<sup>Required</sup> <a name="Classifies" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.classifies"></a>

```csharp
public string[] Classifies { get; }
```

- *Type:* string[]

---

##### `IsA`<sup>Required</sup> <a name="IsA" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.isA"></a>

```csharp
public string[] IsA { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneGlossaryTermTermRelations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTermRelations">DatazoneGlossaryTermTermRelations</a>

---


### DatazoneGlossaryTermTimeoutsOutputReference <a name="DatazoneGlossaryTermTimeoutsOutputReference" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DatazoneGlossaryTermTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneGlossaryTermTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.datazoneGlossaryTerm.DatazoneGlossaryTermTimeouts">DatazoneGlossaryTermTimeouts</a>

---



