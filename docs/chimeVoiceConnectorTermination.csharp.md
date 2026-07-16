# `chimeVoiceConnectorTermination` Submodule <a name="`chimeVoiceConnectorTermination` Submodule" id="@cdktn/provider-aws.chimeVoiceConnectorTermination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorTermination <a name="ChimeVoiceConnectorTermination" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination aws_chime_voice_connector_termination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorTermination(Construct Scope, string Id, ChimeVoiceConnectorTerminationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig">ChimeVoiceConnectorTerminationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig">ChimeVoiceConnectorTerminationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetCpsLimit">ResetCpsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDefaultPhoneNumber">ResetDefaultPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCpsLimit` <a name="ResetCpsLimit" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetCpsLimit"></a>

```csharp
private void ResetCpsLimit()
```

##### `ResetDefaultPhoneNumber` <a name="ResetDefaultPhoneNumber" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDefaultPhoneNumber"></a>

```csharp
private void ResetDefaultPhoneNumber()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeVoiceConnectorTermination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorTermination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorTermination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorTermination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorTermination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChimeVoiceConnectorTermination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeVoiceConnectorTermination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeVoiceConnectorTermination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorTermination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegionsInput">CallingRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowListInput">CidrAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimitInput">CpsLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumberInput">DefaultPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorIdInput">VoiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegions">CallingRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowList">CidrAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimit">CpsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumber">DefaultPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CallingRegionsInput`<sup>Optional</sup> <a name="CallingRegionsInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegionsInput"></a>

```csharp
public string[] CallingRegionsInput { get; }
```

- *Type:* string[]

---

##### `CidrAllowListInput`<sup>Optional</sup> <a name="CidrAllowListInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowListInput"></a>

```csharp
public string[] CidrAllowListInput { get; }
```

- *Type:* string[]

---

##### `CpsLimitInput`<sup>Optional</sup> <a name="CpsLimitInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimitInput"></a>

```csharp
public double CpsLimitInput { get; }
```

- *Type:* double

---

##### `DefaultPhoneNumberInput`<sup>Optional</sup> <a name="DefaultPhoneNumberInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumberInput"></a>

```csharp
public string DefaultPhoneNumberInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VoiceConnectorIdInput`<sup>Optional</sup> <a name="VoiceConnectorIdInput" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorIdInput"></a>

```csharp
public string VoiceConnectorIdInput { get; }
```

- *Type:* string

---

##### `CallingRegions`<sup>Required</sup> <a name="CallingRegions" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.callingRegions"></a>

```csharp
public string[] CallingRegions { get; }
```

- *Type:* string[]

---

##### `CidrAllowList`<sup>Required</sup> <a name="CidrAllowList" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cidrAllowList"></a>

```csharp
public string[] CidrAllowList { get; }
```

- *Type:* string[]

---

##### `CpsLimit`<sup>Required</sup> <a name="CpsLimit" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.cpsLimit"></a>

```csharp
public double CpsLimit { get; }
```

- *Type:* double

---

##### `DefaultPhoneNumber`<sup>Required</sup> <a name="DefaultPhoneNumber" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.defaultPhoneNumber"></a>

```csharp
public string DefaultPhoneNumber { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTermination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorTerminationConfig <a name="ChimeVoiceConnectorTerminationConfig" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorTerminationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] CallingRegions,
    string[] CidrAllowList,
    string VoiceConnectorId,
    double CpsLimit = null,
    string DefaultPhoneNumber = null,
    bool|IResolvable Disabled = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.callingRegions">CallingRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cidrAllowList">CidrAllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cpsLimit">CpsLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.defaultPhoneNumber">DefaultPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CallingRegions`<sup>Required</sup> <a name="CallingRegions" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.callingRegions"></a>

```csharp
public string[] CallingRegions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}.

---

##### `CidrAllowList`<sup>Required</sup> <a name="CidrAllowList" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cidrAllowList"></a>

```csharp
public string[] CidrAllowList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}.

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}.

---

##### `CpsLimit`<sup>Optional</sup> <a name="CpsLimit" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.cpsLimit"></a>

```csharp
public double CpsLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}.

---

##### `DefaultPhoneNumber`<sup>Optional</sup> <a name="DefaultPhoneNumber" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.defaultPhoneNumber"></a>

```csharp
public string DefaultPhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.chimeVoiceConnectorTermination.ChimeVoiceConnectorTerminationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/chime_voice_connector_termination#region ChimeVoiceConnectorTermination#region}

---



