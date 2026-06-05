# `finspaceKxDataview` Submodule <a name="`finspaceKxDataview` Submodule" id="@cdktn/provider-aws.finspaceKxDataview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxDataview <a name="FinspaceKxDataview" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview aws_finspace_kx_dataview}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FinspaceKxDataview(Construct Scope, string Id, FinspaceKxDataviewConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig">FinspaceKxDataviewConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig">FinspaceKxDataviewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations">PutSegmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetChangesetId">ResetChangesetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetReadWrite">ResetReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetSegmentConfigurations">ResetSegmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSegmentConfigurations` <a name="PutSegmentConfigurations" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations"></a>

```csharp
private void PutSegmentConfigurations(IResolvable|FinspaceKxDataviewSegmentConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts"></a>

```csharp
private void PutTimeouts(FinspaceKxDataviewTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetChangesetId` <a name="ResetChangesetId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetChangesetId"></a>

```csharp
private void ResetChangesetId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReadWrite` <a name="ResetReadWrite" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetReadWrite"></a>

```csharp
private void ResetReadWrite()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSegmentConfigurations` <a name="ResetSegmentConfigurations" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetSegmentConfigurations"></a>

```csharp
private void ResetSegmentConfigurations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FinspaceKxDataview resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FinspaceKxDataview.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FinspaceKxDataview.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FinspaceKxDataview.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

FinspaceKxDataview.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FinspaceKxDataview resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FinspaceKxDataview to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FinspaceKxDataview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FinspaceKxDataview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lastModifiedTimestamp">LastModifiedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurations">SegmentConfigurations</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList">FinspaceKxDataviewSegmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference">FinspaceKxDataviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdateInput">AutoUpdateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azModeInput">AzModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetIdInput">ChangesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWriteInput">ReadWriteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurationsInput">SegmentConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdate">AutoUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azMode">AzMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetId">ChangesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWrite">ReadWrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `LastModifiedTimestamp`<sup>Required</sup> <a name="LastModifiedTimestamp" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lastModifiedTimestamp"></a>

```csharp
public string LastModifiedTimestamp { get; }
```

- *Type:* string

---

##### `SegmentConfigurations`<sup>Required</sup> <a name="SegmentConfigurations" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurations"></a>

```csharp
public FinspaceKxDataviewSegmentConfigurationsList SegmentConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList">FinspaceKxDataviewSegmentConfigurationsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeouts"></a>

```csharp
public FinspaceKxDataviewTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference">FinspaceKxDataviewTimeoutsOutputReference</a>

---

##### `AutoUpdateInput`<sup>Optional</sup> <a name="AutoUpdateInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdateInput"></a>

```csharp
public bool|IResolvable AutoUpdateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AzModeInput`<sup>Optional</sup> <a name="AzModeInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azModeInput"></a>

```csharp
public string AzModeInput { get; }
```

- *Type:* string

---

##### `ChangesetIdInput`<sup>Optional</sup> <a name="ChangesetIdInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetIdInput"></a>

```csharp
public string ChangesetIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReadWriteInput`<sup>Optional</sup> <a name="ReadWriteInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWriteInput"></a>

```csharp
public bool|IResolvable ReadWriteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SegmentConfigurationsInput`<sup>Optional</sup> <a name="SegmentConfigurationsInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurationsInput"></a>

```csharp
public IResolvable|FinspaceKxDataviewSegmentConfigurations[] SegmentConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeoutsInput"></a>

```csharp
public IResolvable|FinspaceKxDataviewTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---

##### `AutoUpdate`<sup>Required</sup> <a name="AutoUpdate" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdate"></a>

```csharp
public bool|IResolvable AutoUpdate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azMode"></a>

```csharp
public string AzMode { get; }
```

- *Type:* string

---

##### `ChangesetId`<sup>Required</sup> <a name="ChangesetId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetId"></a>

```csharp
public string ChangesetId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReadWrite`<sup>Required</sup> <a name="ReadWrite" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWrite"></a>

```csharp
public bool|IResolvable ReadWrite { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxDataviewConfig <a name="FinspaceKxDataviewConfig" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FinspaceKxDataviewConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AutoUpdate,
    string AzMode,
    string DatabaseName,
    string EnvironmentId,
    string Name,
    string AvailabilityZoneId = null,
    string ChangesetId = null,
    string Description = null,
    string Id = null,
    bool|IResolvable ReadWrite = null,
    string Region = null,
    IResolvable|FinspaceKxDataviewSegmentConfigurations[] SegmentConfigurations = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    FinspaceKxDataviewTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.autoUpdate">AutoUpdate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.azMode">AzMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.environmentId">EnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.changesetId">ChangesetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.readWrite">ReadWrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.segmentConfigurations">SegmentConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]</code> | segment_configurations block. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoUpdate`<sup>Required</sup> <a name="AutoUpdate" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.autoUpdate"></a>

```csharp
public bool|IResolvable AutoUpdate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}.

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.azMode"></a>

```csharp
public string AzMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}.

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}.

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}.

---

##### `ChangesetId`<sup>Optional</sup> <a name="ChangesetId" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.changesetId"></a>

```csharp
public string ChangesetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReadWrite`<sup>Optional</sup> <a name="ReadWrite" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.readWrite"></a>

```csharp
public bool|IResolvable ReadWrite { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#region FinspaceKxDataview#region}

---

##### `SegmentConfigurations`<sup>Optional</sup> <a name="SegmentConfigurations" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.segmentConfigurations"></a>

```csharp
public IResolvable|FinspaceKxDataviewSegmentConfigurations[] SegmentConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]

segment_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#segment_configurations FinspaceKxDataview#segment_configurations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.timeouts"></a>

```csharp
public FinspaceKxDataviewTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#timeouts FinspaceKxDataview#timeouts}

---

### FinspaceKxDataviewSegmentConfigurations <a name="FinspaceKxDataviewSegmentConfigurations" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FinspaceKxDataviewSegmentConfigurations {
    string[] DbPaths,
    string VolumeName,
    bool|IResolvable OnDemand = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.dbPaths">DbPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.volumeName">VolumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.onDemand">OnDemand</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#on_demand FinspaceKxDataview#on_demand}. |

---

##### `DbPaths`<sup>Required</sup> <a name="DbPaths" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.dbPaths"></a>

```csharp
public string[] DbPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}.

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.volumeName"></a>

```csharp
public string VolumeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}.

---

##### `OnDemand`<sup>Optional</sup> <a name="OnDemand" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.onDemand"></a>

```csharp
public bool|IResolvable OnDemand { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#on_demand FinspaceKxDataview#on_demand}.

---

### FinspaceKxDataviewTimeouts <a name="FinspaceKxDataviewTimeouts" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FinspaceKxDataviewTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxDataviewSegmentConfigurationsList <a name="FinspaceKxDataviewSegmentConfigurationsList" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FinspaceKxDataviewSegmentConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get"></a>

```csharp
private FinspaceKxDataviewSegmentConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|FinspaceKxDataviewSegmentConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>[]

---


### FinspaceKxDataviewSegmentConfigurationsOutputReference <a name="FinspaceKxDataviewSegmentConfigurationsOutputReference" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FinspaceKxDataviewSegmentConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resetOnDemand">ResetOnDemand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnDemand` <a name="ResetOnDemand" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resetOnDemand"></a>

```csharp
private void ResetOnDemand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPathsInput">DbPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemandInput">OnDemandInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPaths">DbPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemand">OnDemand</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbPathsInput`<sup>Optional</sup> <a name="DbPathsInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPathsInput"></a>

```csharp
public string[] DbPathsInput { get; }
```

- *Type:* string[]

---

##### `OnDemandInput`<sup>Optional</sup> <a name="OnDemandInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemandInput"></a>

```csharp
public bool|IResolvable OnDemandInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeNameInput"></a>

```csharp
public string VolumeNameInput { get; }
```

- *Type:* string

---

##### `DbPaths`<sup>Required</sup> <a name="DbPaths" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPaths"></a>

```csharp
public string[] DbPaths { get; }
```

- *Type:* string[]

---

##### `OnDemand`<sup>Required</sup> <a name="OnDemand" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemand"></a>

```csharp
public bool|IResolvable OnDemand { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FinspaceKxDataviewSegmentConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>

---


### FinspaceKxDataviewTimeoutsOutputReference <a name="FinspaceKxDataviewTimeoutsOutputReference" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new FinspaceKxDataviewTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FinspaceKxDataviewTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---



