# `controltowerLandingZone` Submodule <a name="`controltowerLandingZone` Submodule" id="@cdktn/provider-aws.controltowerLandingZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ControltowerLandingZone <a name="ControltowerLandingZone" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone aws_controltower_landing_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ControltowerLandingZone(Construct Scope, string Id, ControltowerLandingZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig">ControltowerLandingZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig">ControltowerLandingZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetRemediationTypes">ResetRemediationTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.putTimeouts"></a>

```csharp
private void PutTimeouts(ControltowerLandingZoneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRemediationTypes` <a name="ResetRemediationTypes" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetRemediationTypes"></a>

```csharp
private void ResetRemediationTypes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ControltowerLandingZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ControltowerLandingZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ControltowerLandingZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ControltowerLandingZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ControltowerLandingZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ControltowerLandingZone resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ControltowerLandingZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ControltowerLandingZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ControltowerLandingZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.driftStatus">DriftStatus</a></code> | <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList">ControltowerLandingZoneDriftStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.latestAvailableVersion">LatestAvailableVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference">ControltowerLandingZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.manifestJsonInput">ManifestJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.remediationTypesInput">RemediationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.manifestJson">ManifestJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.remediationTypes">RemediationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DriftStatus`<sup>Required</sup> <a name="DriftStatus" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.driftStatus"></a>

```csharp
public ControltowerLandingZoneDriftStatusList DriftStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList">ControltowerLandingZoneDriftStatusList</a>

---

##### `LatestAvailableVersion`<sup>Required</sup> <a name="LatestAvailableVersion" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.latestAvailableVersion"></a>

```csharp
public string LatestAvailableVersion { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.timeouts"></a>

```csharp
public ControltowerLandingZoneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference">ControltowerLandingZoneTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManifestJsonInput`<sup>Optional</sup> <a name="ManifestJsonInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.manifestJsonInput"></a>

```csharp
public string ManifestJsonInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RemediationTypesInput`<sup>Optional</sup> <a name="RemediationTypesInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.remediationTypesInput"></a>

```csharp
public string[] RemediationTypesInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.timeoutsInput"></a>

```csharp
public IResolvable|ControltowerLandingZoneTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManifestJson`<sup>Required</sup> <a name="ManifestJson" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.manifestJson"></a>

```csharp
public string ManifestJson { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RemediationTypes`<sup>Required</sup> <a name="RemediationTypes" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.remediationTypes"></a>

```csharp
public string[] RemediationTypes { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ControltowerLandingZoneConfig <a name="ControltowerLandingZoneConfig" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ControltowerLandingZoneConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ManifestJson,
    string Version,
    string Id = null,
    string Region = null,
    string[] RemediationTypes = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    ControltowerLandingZoneTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.manifestJson">ManifestJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#manifest_json ControltowerLandingZone#manifest_json}. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#version ControltowerLandingZone#version}. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#id ControltowerLandingZone#id}. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.remediationTypes">RemediationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#remediation_types ControltowerLandingZone#remediation_types}. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#tags ControltowerLandingZone#tags}. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#tags_all ControltowerLandingZone#tags_all}. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ManifestJson`<sup>Required</sup> <a name="ManifestJson" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.manifestJson"></a>

```csharp
public string ManifestJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#manifest_json ControltowerLandingZone#manifest_json}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#version ControltowerLandingZone#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#id ControltowerLandingZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#region ControltowerLandingZone#region}

---

##### `RemediationTypes`<sup>Optional</sup> <a name="RemediationTypes" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.remediationTypes"></a>

```csharp
public string[] RemediationTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#remediation_types ControltowerLandingZone#remediation_types}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#tags ControltowerLandingZone#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#tags_all ControltowerLandingZone#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneConfig.property.timeouts"></a>

```csharp
public ControltowerLandingZoneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#timeouts ControltowerLandingZone#timeouts}

---

### ControltowerLandingZoneDriftStatus <a name="ControltowerLandingZoneDriftStatus" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ControltowerLandingZoneDriftStatus {

};
```


### ControltowerLandingZoneTimeouts <a name="ControltowerLandingZoneTimeouts" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ControltowerLandingZoneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#create ControltowerLandingZone#create}. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#delete ControltowerLandingZone#delete}. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#update ControltowerLandingZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#create ControltowerLandingZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#delete ControltowerLandingZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/controltower_landing_zone#update ControltowerLandingZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ControltowerLandingZoneDriftStatusList <a name="ControltowerLandingZoneDriftStatusList" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ControltowerLandingZoneDriftStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.get"></a>

```csharp
private ControltowerLandingZoneDriftStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ControltowerLandingZoneDriftStatusOutputReference <a name="ControltowerLandingZoneDriftStatusOutputReference" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ControltowerLandingZoneDriftStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatus">ControltowerLandingZoneDriftStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatusOutputReference.property.internalValue"></a>

```csharp
public ControltowerLandingZoneDriftStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneDriftStatus">ControltowerLandingZoneDriftStatus</a>

---


### ControltowerLandingZoneTimeoutsOutputReference <a name="ControltowerLandingZoneTimeoutsOutputReference" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ControltowerLandingZoneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ControltowerLandingZoneTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.controltowerLandingZone.ControltowerLandingZoneTimeouts">ControltowerLandingZoneTimeouts</a>

---



