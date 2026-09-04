# `pinpointsmsvoicev2EventDestination` Submodule <a name="`pinpointsmsvoicev2EventDestination` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2EventDestination <a name="Pinpointsmsvoicev2EventDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination aws_pinpointsmsvoicev2_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestination(Construct Scope, string Id, Pinpointsmsvoicev2EventDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig">Pinpointsmsvoicev2EventDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig">Pinpointsmsvoicev2EventDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination">PutCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination">PutKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination">PutSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetCloudwatchLogsDestination">ResetCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetKinesisFirehoseDestination">ResetKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetSnsDestination">ResetSnsDestination</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudwatchLogsDestination` <a name="PutCloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination"></a>

```csharp
private void PutCloudwatchLogsDestination(IResolvable|Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putCloudwatchLogsDestination.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>[]

---

##### `PutKinesisFirehoseDestination` <a name="PutKinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination"></a>

```csharp
private void PutKinesisFirehoseDestination(IResolvable|Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putKinesisFirehoseDestination.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>[]

---

##### `PutSnsDestination` <a name="PutSnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination"></a>

```csharp
private void PutSnsDestination(IResolvable|Pinpointsmsvoicev2EventDestinationSnsDestination[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.putSnsDestination.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>[]

---

##### `ResetCloudwatchLogsDestination` <a name="ResetCloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetCloudwatchLogsDestination"></a>

```csharp
private void ResetCloudwatchLogsDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetKinesisFirehoseDestination` <a name="ResetKinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetKinesisFirehoseDestination"></a>

```csharp
private void ResetKinesisFirehoseDestination()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSnsDestination` <a name="ResetSnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.resetSnsDestination"></a>

```csharp
private void ResetSnsDestination()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2EventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2EventDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2EventDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2EventDestination.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2EventDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Pinpointsmsvoicev2EventDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2EventDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2EventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2EventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestination">CloudwatchLogsDestination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetArn">ConfigurationSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList">Pinpointsmsvoicev2EventDestinationSnsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestinationInput">CloudwatchLogsDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationNameInput">EventDestinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestinationInput">KinesisFirehoseDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypesInput">MatchingEventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestinationInput">SnsDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationName">EventDestinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudwatchLogsDestination`<sup>Required</sup> <a name="CloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestination"></a>

```csharp
public Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList CloudwatchLogsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList</a>

---

##### `ConfigurationSetArn`<sup>Required</sup> <a name="ConfigurationSetArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetArn"></a>

```csharp
public string ConfigurationSetArn { get; }
```

- *Type:* string

---

##### `KinesisFirehoseDestination`<sup>Required</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestination"></a>

```csharp
public Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList KinesisFirehoseDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList</a>

---

##### `SnsDestination`<sup>Required</sup> <a name="SnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestination"></a>

```csharp
public Pinpointsmsvoicev2EventDestinationSnsDestinationList SnsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList">Pinpointsmsvoicev2EventDestinationSnsDestinationList</a>

---

##### `CloudwatchLogsDestinationInput`<sup>Optional</sup> <a name="CloudwatchLogsDestinationInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.cloudwatchLogsDestinationInput"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination[] CloudwatchLogsDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>[]

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventDestinationNameInput`<sup>Optional</sup> <a name="EventDestinationNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationNameInput"></a>

```csharp
public string EventDestinationNameInput { get; }
```

- *Type:* string

---

##### `KinesisFirehoseDestinationInput`<sup>Optional</sup> <a name="KinesisFirehoseDestinationInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.kinesisFirehoseDestinationInput"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination[] KinesisFirehoseDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>[]

---

##### `MatchingEventTypesInput`<sup>Optional</sup> <a name="MatchingEventTypesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypesInput"></a>

```csharp
public string[] MatchingEventTypesInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SnsDestinationInput`<sup>Optional</sup> <a name="SnsDestinationInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.snsDestinationInput"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationSnsDestination[] SnsDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>[]

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventDestinationName`<sup>Required</sup> <a name="EventDestinationName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.eventDestinationName"></a>

```csharp
public string EventDestinationName { get; }
```

- *Type:* string

---

##### `MatchingEventTypes`<sup>Required</sup> <a name="MatchingEventTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.matchingEventTypes"></a>

```csharp
public string[] MatchingEventTypes { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination {
    string IamRoleArn,
    string LogGroupArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | ARN of the IAM role that End User Messaging SMS assumes to write to the log group. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | ARN of the Amazon CloudWatch log group that receives the events. |

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

ARN of the IAM role that End User Messaging SMS assumes to write to the log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn Pinpointsmsvoicev2EventDestination#iam_role_arn}

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

ARN of the Amazon CloudWatch log group that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#log_group_arn Pinpointsmsvoicev2EventDestination#log_group_arn}

---

### Pinpointsmsvoicev2EventDestinationConfig <a name="Pinpointsmsvoicev2EventDestinationConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigurationSetName,
    string EventDestinationName,
    string[] MatchingEventTypes,
    IResolvable|Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination[] CloudwatchLogsDestination = null,
    bool|IResolvable Enabled = null,
    IResolvable|Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination[] KinesisFirehoseDestination = null,
    string Region = null,
    IResolvable|Pinpointsmsvoicev2EventDestinationSnsDestination[] SnsDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | Name of the configuration set this event destination belongs to. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.eventDestinationName">EventDestinationName</a></code> | <code>string</code> | Name of the event destination. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>string[]</code> | Event types for which the destination receives records. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.cloudwatchLogsDestination">CloudwatchLogsDestination</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>[]</code> | cloudwatch_logs_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the event destination is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>[]</code> | kinesis_firehose_destination block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.snsDestination">SnsDestination</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>[]</code> | sns_destination block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

Name of the configuration set this event destination belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#configuration_set_name Pinpointsmsvoicev2EventDestination#configuration_set_name}

---

##### `EventDestinationName`<sup>Required</sup> <a name="EventDestinationName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.eventDestinationName"></a>

```csharp
public string EventDestinationName { get; set; }
```

- *Type:* string

Name of the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#event_destination_name Pinpointsmsvoicev2EventDestination#event_destination_name}

---

##### `MatchingEventTypes`<sup>Required</sup> <a name="MatchingEventTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.matchingEventTypes"></a>

```csharp
public string[] MatchingEventTypes { get; set; }
```

- *Type:* string[]

Event types for which the destination receives records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#matching_event_types Pinpointsmsvoicev2EventDestination#matching_event_types}

---

##### `CloudwatchLogsDestination`<sup>Optional</sup> <a name="CloudwatchLogsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.cloudwatchLogsDestination"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination[] CloudwatchLogsDestination { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>[]

cloudwatch_logs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#cloudwatch_logs_destination Pinpointsmsvoicev2EventDestination#cloudwatch_logs_destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the event destination is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#enabled Pinpointsmsvoicev2EventDestination#enabled}

---

##### `KinesisFirehoseDestination`<sup>Optional</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.kinesisFirehoseDestination"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination[] KinesisFirehoseDestination { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>[]

kinesis_firehose_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#kinesis_firehose_destination Pinpointsmsvoicev2EventDestination#kinesis_firehose_destination}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#region Pinpointsmsvoicev2EventDestination#region}

---

##### `SnsDestination`<sup>Optional</sup> <a name="SnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationConfig.property.snsDestination"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationSnsDestination[] SnsDestination { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>[]

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#sns_destination Pinpointsmsvoicev2EventDestination#sns_destination}

---

### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination {
    string DeliveryStreamArn,
    string IamRoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>string</code> | ARN of the Amazon Data Firehose delivery stream that receives the events. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | ARN of the IAM role that End User Messaging SMS assumes to write to the delivery stream. |

---

##### `DeliveryStreamArn`<sup>Required</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```csharp
public string DeliveryStreamArn { get; set; }
```

- *Type:* string

ARN of the Amazon Data Firehose delivery stream that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#delivery_stream_arn Pinpointsmsvoicev2EventDestination#delivery_stream_arn}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

ARN of the IAM role that End User Messaging SMS assumes to write to the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#iam_role_arn Pinpointsmsvoicev2EventDestination#iam_role_arn}

---

### Pinpointsmsvoicev2EventDestinationSnsDestination <a name="Pinpointsmsvoicev2EventDestinationSnsDestination" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationSnsDestination {
    string TopicArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.property.topicArn">TopicArn</a></code> | <code>string</code> | ARN of the Amazon SNS topic that receives the events. |

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

ARN of the Amazon SNS topic that receives the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_event_destination#topic_arn Pinpointsmsvoicev2EventDestination#topic_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get"></a>

```csharp
private Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationList.property.internalValue"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>[]

---


### Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination">Pinpointsmsvoicev2EventDestinationCloudwatchLogsDestination</a>

---


### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get"></a>

```csharp
private Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationList.property.internalValue"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>[]

---


### Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">DeliveryStreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamArnInput`<sup>Optional</sup> <a name="DeliveryStreamArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```csharp
public string DeliveryStreamArnInput { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `DeliveryStreamArn`<sup>Required</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```csharp
public string DeliveryStreamArn { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination">Pinpointsmsvoicev2EventDestinationKinesisFirehoseDestination</a>

---


### Pinpointsmsvoicev2EventDestinationSnsDestinationList <a name="Pinpointsmsvoicev2EventDestinationSnsDestinationList" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationSnsDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get"></a>

```csharp
private Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationList.property.internalValue"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationSnsDestination[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>[]

---


### Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference <a name="Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2EventDestinationSnsDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2EventDestination.Pinpointsmsvoicev2EventDestinationSnsDestination">Pinpointsmsvoicev2EventDestinationSnsDestination</a>

---



