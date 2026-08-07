# `ramResourceShareAssociationsExclusive` Submodule <a name="`ramResourceShareAssociationsExclusive` Submodule" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RamResourceShareAssociationsExclusive <a name="RamResourceShareAssociationsExclusive" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive aws_ram_resource_share_associations_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RamResourceShareAssociationsExclusive(Construct Scope, string Id, RamResourceShareAssociationsExclusiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig">RamResourceShareAssociationsExclusiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig">RamResourceShareAssociationsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetResourceArns">ResetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetPrincipals"></a>

```csharp
private void ResetPrincipals()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetResourceArns"></a>

```csharp
private void ResetResourceArns()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetSources"></a>

```csharp
private void ResetSources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RamResourceShareAssociationsExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RamResourceShareAssociationsExclusive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RamResourceShareAssociationsExclusive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RamResourceShareAssociationsExclusive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RamResourceShareAssociationsExclusive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RamResourceShareAssociationsExclusive resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RamResourceShareAssociationsExclusive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RamResourceShareAssociationsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RamResourceShareAssociationsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArnInput">ResourceShareArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sourcesInput">SourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArn">ResourceShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sources">Sources</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArnsInput"></a>

```csharp
public string[] ResourceArnsInput { get; }
```

- *Type:* string[]

---

##### `ResourceShareArnInput`<sup>Optional</sup> <a name="ResourceShareArnInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArnInput"></a>

```csharp
public string ResourceShareArnInput { get; }
```

- *Type:* string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sourcesInput"></a>

```csharp
public string[] SourcesInput { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; }
```

- *Type:* string[]

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArn"></a>

```csharp
public string ResourceShareArn { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sources"></a>

```csharp
public string[] Sources { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RamResourceShareAssociationsExclusiveConfig <a name="RamResourceShareAssociationsExclusiveConfig" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RamResourceShareAssociationsExclusiveConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceShareArn,
    string[] Principals = null,
    string Region = null,
    string[] ResourceArns = null,
    string[] Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceShareArn">ResourceShareArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.principals">Principals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.sources">Sources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceShareArn"></a>

```csharp
public string ResourceShareArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}.

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#region RamResourceShareAssociationsExclusive#region}

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}.

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.sources"></a>

```csharp
public string[] Sources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}.

---



