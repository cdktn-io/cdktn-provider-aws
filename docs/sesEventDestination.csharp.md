# `sesEventDestination` Submodule <a name="`sesEventDestination` Submodule" id="@cdktn/provider-aws.sesEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEventDestination <a name="SesEventDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination aws_ses_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestination(Construct Scope, string Id, SesEventDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig">SesEventDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig">SesEventDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination">PutCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination">PutKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination">PutSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetCloudwatchDestination">ResetCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetKinesisDestination">ResetKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetSnsDestination">ResetSnsDestination</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudwatchDestination` <a name="PutCloudwatchDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination"></a>

```csharp
private void PutCloudwatchDestination(IResolvable|SesEventDestinationCloudwatchDestination[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.putCloudwatchDestination.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]

---

##### `PutKinesisDestination` <a name="PutKinesisDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination"></a>

```csharp
private void PutKinesisDestination(SesEventDestinationKinesisDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.putKinesisDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---

##### `PutSnsDestination` <a name="PutSnsDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination"></a>

```csharp
private void PutSnsDestination(SesEventDestinationSnsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---

##### `ResetCloudwatchDestination` <a name="ResetCloudwatchDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetCloudwatchDestination"></a>

```csharp
private void ResetCloudwatchDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKinesisDestination` <a name="ResetKinesisDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetKinesisDestination"></a>

```csharp
private void ResetKinesisDestination()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSnsDestination` <a name="ResetSnsDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.resetSnsDestination"></a>

```csharp
private void ResetSnsDestination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesEventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SesEventDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SesEventDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SesEventDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SesEventDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SesEventDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesEventDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SesEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestination">CloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList">SesEventDestinationCloudwatchDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestination">KinesisDestination</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference">SesEventDestinationKinesisDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference">SesEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestinationInput">CloudwatchDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestinationInput">KinesisDestinationInput</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypesInput">MatchingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.snsDestinationInput">SnsDestinationInput</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypes">MatchingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchDestination`<sup>Required</sup> <a name="CloudwatchDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestination"></a>

```csharp
public SesEventDestinationCloudwatchDestinationList CloudwatchDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList">SesEventDestinationCloudwatchDestinationList</a>

---

##### `KinesisDestination`<sup>Required</sup> <a name="KinesisDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestination"></a>

```csharp
public SesEventDestinationKinesisDestinationOutputReference KinesisDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference">SesEventDestinationKinesisDestinationOutputReference</a>

---

##### `SnsDestination`<sup>Required</sup> <a name="SnsDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.snsDestination"></a>

```csharp
public SesEventDestinationSnsDestinationOutputReference SnsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference">SesEventDestinationSnsDestinationOutputReference</a>

---

##### `CloudwatchDestinationInput`<sup>Optional</sup> <a name="CloudwatchDestinationInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.cloudwatchDestinationInput"></a>

```csharp
public IResolvable|SesEventDestinationCloudwatchDestination[] CloudwatchDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KinesisDestinationInput`<sup>Optional</sup> <a name="KinesisDestinationInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.kinesisDestinationInput"></a>

```csharp
public SesEventDestinationKinesisDestination KinesisDestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---

##### `MatchingTypesInput`<sup>Optional</sup> <a name="MatchingTypesInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypesInput"></a>

```csharp
public string[] MatchingTypesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SnsDestinationInput`<sup>Optional</sup> <a name="SnsDestinationInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.snsDestinationInput"></a>

```csharp
public SesEventDestinationSnsDestination SnsDestinationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MatchingTypes`<sup>Required</sup> <a name="MatchingTypes" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.matchingTypes"></a>

```csharp
public string[] MatchingTypes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sesEventDestination.SesEventDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesEventDestinationCloudwatchDestination <a name="SesEventDestinationCloudwatchDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestinationCloudwatchDestination {
    string DefaultValue,
    string DimensionName,
    string ValueSource
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.defaultValue">DefaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#default_value SesEventDestination#default_value}. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.dimensionName">DimensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#dimension_name SesEventDestination#dimension_name}. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.valueSource">ValueSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#value_source SesEventDestination#value_source}. |

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#default_value SesEventDestination#default_value}.

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.dimensionName"></a>

```csharp
public string DimensionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#dimension_name SesEventDestination#dimension_name}.

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination.property.valueSource"></a>

```csharp
public string ValueSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#value_source SesEventDestination#value_source}.

---

### SesEventDestinationConfig <a name="SesEventDestinationConfig" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigurationSetName,
    string[] MatchingTypes,
    string Name,
    IResolvable|SesEventDestinationCloudwatchDestination[] CloudwatchDestination = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    SesEventDestinationKinesisDestination KinesisDestination = null,
    string Region = null,
    SesEventDestinationSnsDestination SnsDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.matchingTypes">MatchingTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#matching_types SesEventDestination#matching_types}. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#name SesEventDestination#name}. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.cloudwatchDestination">CloudwatchDestination</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]</code> | cloudwatch_destination block. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#enabled SesEventDestination#enabled}. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#id SesEventDestination#id}. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.kinesisDestination">KinesisDestination</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | kinesis_destination block. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | sns_destination block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}.

---

##### `MatchingTypes`<sup>Required</sup> <a name="MatchingTypes" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.matchingTypes"></a>

```csharp
public string[] MatchingTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#matching_types SesEventDestination#matching_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#name SesEventDestination#name}.

---

##### `CloudwatchDestination`<sup>Optional</sup> <a name="CloudwatchDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.cloudwatchDestination"></a>

```csharp
public IResolvable|SesEventDestinationCloudwatchDestination[] CloudwatchDestination { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]

cloudwatch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#cloudwatch_destination SesEventDestination#cloudwatch_destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#enabled SesEventDestination#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#id SesEventDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KinesisDestination`<sup>Optional</sup> <a name="KinesisDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.kinesisDestination"></a>

```csharp
public SesEventDestinationKinesisDestination KinesisDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

kinesis_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#kinesis_destination SesEventDestination#kinesis_destination}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#region SesEventDestination#region}

---

##### `SnsDestination`<sup>Optional</sup> <a name="SnsDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationConfig.property.snsDestination"></a>

```csharp
public SesEventDestinationSnsDestination SnsDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#sns_destination SesEventDestination#sns_destination}

---

### SesEventDestinationKinesisDestination <a name="SesEventDestinationKinesisDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestinationKinesisDestination {
    string RoleArn,
    string StreamArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#role_arn SesEventDestination#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.streamArn">StreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#stream_arn SesEventDestination#stream_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#role_arn SesEventDestination#role_arn}.

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination.property.streamArn"></a>

```csharp
public string StreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#stream_arn SesEventDestination#stream_arn}.

---

### SesEventDestinationSnsDestination <a name="SesEventDestinationSnsDestination" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestinationSnsDestination {
    string TopicArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#topic_arn SesEventDestination#topic_arn}. |

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/ses_event_destination#topic_arn SesEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesEventDestinationCloudwatchDestinationList <a name="SesEventDestinationCloudwatchDestinationList" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestinationCloudwatchDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get"></a>

```csharp
private SesEventDestinationCloudwatchDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.internalValue"></a>

```csharp
public IResolvable|SesEventDestinationCloudwatchDestination[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]

---


### SesEventDestinationCloudwatchDestinationOutputReference <a name="SesEventDestinationCloudwatchDestinationOutputReference" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestinationCloudwatchDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionNameInput">DimensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionName">DimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSource">ValueSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DimensionNameInput`<sup>Optional</sup> <a name="DimensionNameInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionNameInput"></a>

```csharp
public string DimensionNameInput { get; }
```

- *Type:* string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSourceInput"></a>

```csharp
public string ValueSourceInput { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionName"></a>

```csharp
public string DimensionName { get; }
```

- *Type:* string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSource"></a>

```csharp
public string ValueSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SesEventDestinationCloudwatchDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>

---


### SesEventDestinationKinesisDestinationOutputReference <a name="SesEventDestinationKinesisDestinationOutputReference" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestinationKinesisDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArnInput"></a>

```csharp
public string StreamArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.internalValue"></a>

```csharp
public SesEventDestinationKinesisDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---


### SesEventDestinationSnsDestinationOutputReference <a name="SesEventDestinationSnsDestinationOutputReference" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SesEventDestinationSnsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```csharp
public SesEventDestinationSnsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---



