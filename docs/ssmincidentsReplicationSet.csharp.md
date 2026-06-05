# `ssmincidentsReplicationSet` Submodule <a name="`ssmincidentsReplicationSet` Submodule" id="@cdktn/provider-aws.ssmincidentsReplicationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsReplicationSet <a name="SsmincidentsReplicationSet" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set aws_ssmincidents_replication_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSet(Construct Scope, string Id, SsmincidentsReplicationSetConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig">SsmincidentsReplicationSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig">SsmincidentsReplicationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegion">PutRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions">PutRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRegion` <a name="PutRegion" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegion"></a>

```csharp
private void PutRegion(IResolvable|SsmincidentsReplicationSetRegion[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegion.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>[]

---

##### `PutRegions` <a name="PutRegions" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions"></a>

```csharp
private void PutRegions(IResolvable|SsmincidentsReplicationSetRegions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putRegions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTimeouts"></a>

```csharp
private void PutTimeouts(SsmincidentsReplicationSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmincidentsReplicationSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmincidentsReplicationSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmincidentsReplicationSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmincidentsReplicationSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmincidentsReplicationSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmincidentsReplicationSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmincidentsReplicationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmincidentsReplicationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtected">DeletionProtected</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lastModifiedBy">LastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.region">Region</a></code> | <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList">SsmincidentsReplicationSetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList">SsmincidentsReplicationSetRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference">SsmincidentsReplicationSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionInput">RegionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionsInput">RegionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DeletionProtected`<sup>Required</sup> <a name="DeletionProtected" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.deletionProtected"></a>

```csharp
public IResolvable DeletionProtected { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastModifiedBy`<sup>Required</sup> <a name="LastModifiedBy" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.lastModifiedBy"></a>

```csharp
public string LastModifiedBy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.region"></a>

```csharp
public SsmincidentsReplicationSetRegionList Region { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList">SsmincidentsReplicationSetRegionList</a>

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regions"></a>

```csharp
public SsmincidentsReplicationSetRegionsList Regions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList">SsmincidentsReplicationSetRegionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.timeouts"></a>

```csharp
public SsmincidentsReplicationSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference">SsmincidentsReplicationSetTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionInput"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetRegion[] RegionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>[]

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.regionsInput"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetRegions[] RegionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.timeoutsInput"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsReplicationSetConfig <a name="SsmincidentsReplicationSetConfig" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    IResolvable|SsmincidentsReplicationSetRegion[] Region = null,
    IResolvable|SsmincidentsReplicationSetRegions[] Regions = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    SsmincidentsReplicationSetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#id SsmincidentsReplicationSet#id}. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.region">Region</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>[]</code> | region block. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.regions">Regions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]</code> | regions block. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#tags_all SsmincidentsReplicationSet#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#id SsmincidentsReplicationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.region"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetRegion[] Region { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>[]

region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#region SsmincidentsReplicationSet#region}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.regions"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetRegions[] Regions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]

regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#regions SsmincidentsReplicationSet#regions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#tags SsmincidentsReplicationSet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#tags_all SsmincidentsReplicationSet#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetConfig.property.timeouts"></a>

```csharp
public SsmincidentsReplicationSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#timeouts SsmincidentsReplicationSet#timeouts}

---

### SsmincidentsReplicationSetRegion <a name="SsmincidentsReplicationSetRegion" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetRegion {
    string Name,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#name SsmincidentsReplicationSet#name}. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#kms_key_arn SsmincidentsReplicationSet#kms_key_arn}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#name SsmincidentsReplicationSet#name}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#kms_key_arn SsmincidentsReplicationSet#kms_key_arn}.

---

### SsmincidentsReplicationSetRegions <a name="SsmincidentsReplicationSetRegions" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetRegions {
    string Name,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#name SsmincidentsReplicationSet#name}. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#kms_key_arn SsmincidentsReplicationSet#kms_key_arn}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#name SsmincidentsReplicationSet#name}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#kms_key_arn SsmincidentsReplicationSet#kms_key_arn}.

---

### SsmincidentsReplicationSetTimeouts <a name="SsmincidentsReplicationSetTimeouts" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#create SsmincidentsReplicationSet#create}. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#delete SsmincidentsReplicationSet#delete}. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#update SsmincidentsReplicationSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#create SsmincidentsReplicationSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#delete SsmincidentsReplicationSet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/ssmincidents_replication_set#update SsmincidentsReplicationSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsReplicationSetRegionList <a name="SsmincidentsReplicationSetRegionList" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.get"></a>

```csharp
private SsmincidentsReplicationSetRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetRegion[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>[]

---


### SsmincidentsReplicationSetRegionOutputReference <a name="SsmincidentsReplicationSetRegionOutputReference" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetRegion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegion">SsmincidentsReplicationSetRegion</a>

---


### SsmincidentsReplicationSetRegionsList <a name="SsmincidentsReplicationSetRegionsList" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetRegionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get"></a>

```csharp
private SsmincidentsReplicationSetRegionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsList.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetRegions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>[]

---


### SsmincidentsReplicationSetRegionsOutputReference <a name="SsmincidentsReplicationSetRegionsOutputReference" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetRegionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetRegions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetRegions">SsmincidentsReplicationSetRegions</a>

---


### SsmincidentsReplicationSetTimeoutsOutputReference <a name="SsmincidentsReplicationSetTimeoutsOutputReference" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmincidentsReplicationSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmincidentsReplicationSetTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmincidentsReplicationSet.SsmincidentsReplicationSetTimeouts">SsmincidentsReplicationSetTimeouts</a>

---



