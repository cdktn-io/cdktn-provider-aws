# `chimeVoiceConnectorLogging` Submodule <a name="`chimeVoiceConnectorLogging` Submodule" id="@cdktn/provider-aws.chimeVoiceConnectorLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorLogging <a name="ChimeVoiceConnectorLogging" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging aws_chime_voice_connector_logging}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorLogging(Construct Scope, string Id, ChimeVoiceConnectorLoggingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig">ChimeVoiceConnectorLoggingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig">ChimeVoiceConnectorLoggingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableMediaMetricLogs">ResetEnableMediaMetricLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableSipLogs">ResetEnableSipLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnableMediaMetricLogs` <a name="ResetEnableMediaMetricLogs" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableMediaMetricLogs"></a>

```csharp
private void ResetEnableMediaMetricLogs()
```

##### `ResetEnableSipLogs` <a name="ResetEnableSipLogs" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableSipLogs"></a>

```csharp
private void ResetEnableSipLogs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeVoiceConnectorLogging resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorLogging.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorLogging.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorLogging.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChimeVoiceConnectorLogging.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChimeVoiceConnectorLogging resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeVoiceConnectorLogging to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeVoiceConnectorLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogsInput">EnableMediaMetricLogsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogsInput">EnableSipLogsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorIdInput">VoiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogs">EnableMediaMetricLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogs">EnableSipLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnableMediaMetricLogsInput`<sup>Optional</sup> <a name="EnableMediaMetricLogsInput" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogsInput"></a>

```csharp
public bool|IResolvable EnableMediaMetricLogsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableSipLogsInput`<sup>Optional</sup> <a name="EnableSipLogsInput" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogsInput"></a>

```csharp
public bool|IResolvable EnableSipLogsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VoiceConnectorIdInput`<sup>Optional</sup> <a name="VoiceConnectorIdInput" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorIdInput"></a>

```csharp
public string VoiceConnectorIdInput { get; }
```

- *Type:* string

---

##### `EnableMediaMetricLogs`<sup>Required</sup> <a name="EnableMediaMetricLogs" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogs"></a>

```csharp
public bool|IResolvable EnableMediaMetricLogs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableSipLogs`<sup>Required</sup> <a name="EnableSipLogs" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogs"></a>

```csharp
public bool|IResolvable EnableSipLogs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorLoggingConfig <a name="ChimeVoiceConnectorLoggingConfig" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChimeVoiceConnectorLoggingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string VoiceConnectorId,
    bool|IResolvable EnableMediaMetricLogs = null,
    bool|IResolvable EnableSipLogs = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableMediaMetricLogs">EnableMediaMetricLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableSipLogs">EnableSipLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}. |
| <code><a href="#@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.voiceConnectorId"></a>

```csharp
public string VoiceConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}.

---

##### `EnableMediaMetricLogs`<sup>Optional</sup> <a name="EnableMediaMetricLogs" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableMediaMetricLogs"></a>

```csharp
public bool|IResolvable EnableMediaMetricLogs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}.

---

##### `EnableSipLogs`<sup>Optional</sup> <a name="EnableSipLogs" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableSipLogs"></a>

```csharp
public bool|IResolvable EnableSipLogs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/chime_voice_connector_logging#region ChimeVoiceConnectorLogging#region}

---



