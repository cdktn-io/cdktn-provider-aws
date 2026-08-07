# `chimeVoiceConnectorOrigination` Submodule <a name="`chimeVoiceConnectorOrigination` Submodule" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorOrigination <a name="ChimeVoiceConnectorOrigination" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination aws_chime_voice_connector_origination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorOrigination(Construct Scope, string Id, ChimeVoiceConnectorOriginationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig">ChimeVoiceConnectorOriginationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig">ChimeVoiceConnectorOriginationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute">PutRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoute` <a name="PutRoute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute"></a>

```csharp
private void PutRoute(IResolvable|ChimeVoiceConnectorOriginationRoute[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.putRoute.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeVoiceConnectorOrigination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorOrigination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorOrigination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorOrigination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorOrigination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChimeVoiceConnectorOrigination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeVoiceConnectorOrigination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeVoiceConnectorOrigination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorOrigination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.route">Route</a></code> | <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList">ChimeVoiceConnectorOriginationRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.routeInput">RouteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorIdInput">VoiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.route"></a>

```csharp
public ChimeVoiceConnectorOriginationRouteList Route { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList">ChimeVoiceConnectorOriginationRouteList</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.routeInput"></a>

```csharp
public IResolvable|ChimeVoiceConnectorOriginationRoute[] RouteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]

---

##### `VoiceConnectorIdInput`<sup>Optional</sup> <a name="VoiceConnectorIdInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorIdInput"></a>

```csharp
public string VoiceConnectorIdInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOrigination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorOriginationConfig <a name="ChimeVoiceConnectorOriginationConfig" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorOriginationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ChimeVoiceConnectorOriginationRoute[] Route,
    string VoiceConnectorId,
    bool|IResolvable Disabled = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.route">Route</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]</code> | route block. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#disabled ChimeVoiceConnectorOrigination#disabled}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#id ChimeVoiceConnectorOrigination#id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.route"></a>

```csharp
public IResolvable|ChimeVoiceConnectorOriginationRoute[] Route { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#route ChimeVoiceConnectorOrigination#route}

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#disabled ChimeVoiceConnectorOrigination#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#id ChimeVoiceConnectorOrigination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#region ChimeVoiceConnectorOrigination#region}

---

### ChimeVoiceConnectorOriginationRoute <a name="ChimeVoiceConnectorOriginationRoute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorOriginationRoute {
    string Host,
    double Priority,
    string Protocol,
    double Weight,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#host ChimeVoiceConnectorOrigination#host}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#priority ChimeVoiceConnectorOrigination#priority}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#protocol ChimeVoiceConnectorOrigination#protocol}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#weight ChimeVoiceConnectorOrigination#weight}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#port ChimeVoiceConnectorOrigination#port}. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#host ChimeVoiceConnectorOrigination#host}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#priority ChimeVoiceConnectorOrigination#priority}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#protocol ChimeVoiceConnectorOrigination#protocol}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#weight ChimeVoiceConnectorOrigination#weight}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/chime_voice_connector_origination#port ChimeVoiceConnectorOrigination#port}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorOriginationRouteList <a name="ChimeVoiceConnectorOriginationRouteList" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorOriginationRouteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get"></a>

```csharp
private ChimeVoiceConnectorOriginationRouteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteList.property.internalValue"></a>

```csharp
public IResolvable|ChimeVoiceConnectorOriginationRoute[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>[]

---


### ChimeVoiceConnectorOriginationRouteOutputReference <a name="ChimeVoiceConnectorOriginationRouteOutputReference" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorOriginationRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRouteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChimeVoiceConnectorOriginationRoute InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chimeVoiceConnectorOrigination.ChimeVoiceConnectorOriginationRoute">ChimeVoiceConnectorOriginationRoute</a>

---



