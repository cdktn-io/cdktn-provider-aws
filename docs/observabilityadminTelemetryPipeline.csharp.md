# `observabilityadminTelemetryPipeline` Submodule <a name="`observabilityadminTelemetryPipeline` Submodule" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminTelemetryPipeline <a name="ObservabilityadminTelemetryPipeline" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline aws_observabilityadmin_telemetry_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryPipeline(Construct Scope, string Id, ObservabilityadminTelemetryPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig">ObservabilityadminTelemetryPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig">ObservabilityadminTelemetryPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.putConfiguration"></a>

```csharp
private void PutConfiguration(IResolvable|ObservabilityadminTelemetryPipelineConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.putConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.putTimeouts"></a>

```csharp
private void PutTimeouts(ObservabilityadminTelemetryPipelineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts">ObservabilityadminTelemetryPipelineTimeouts</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminTelemetryPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ObservabilityadminTelemetryPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ObservabilityadminTelemetryPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ObservabilityadminTelemetryPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ObservabilityadminTelemetryPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ObservabilityadminTelemetryPipeline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminTelemetryPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminTelemetryPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminTelemetryPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList">ObservabilityadminTelemetryPipelineConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference">ObservabilityadminTelemetryPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts">ObservabilityadminTelemetryPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.configuration"></a>

```csharp
public ObservabilityadminTelemetryPipelineConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList">ObservabilityadminTelemetryPipelineConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.timeouts"></a>

```csharp
public ObservabilityadminTelemetryPipelineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference">ObservabilityadminTelemetryPipelineTimeoutsOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.configurationInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryPipelineConfiguration[] ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.timeoutsInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryPipelineTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts">ObservabilityadminTelemetryPipelineTimeouts</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminTelemetryPipelineConfig <a name="ObservabilityadminTelemetryPipelineConfig" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryPipelineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|ObservabilityadminTelemetryPipelineConfiguration[] Configuration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ObservabilityadminTelemetryPipelineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#name ObservabilityadminTelemetryPipeline#name}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.configuration">Configuration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#tags ObservabilityadminTelemetryPipeline#tags}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts">ObservabilityadminTelemetryPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#name ObservabilityadminTelemetryPipeline#name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.configuration"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryPipelineConfiguration[] Configuration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#configuration ObservabilityadminTelemetryPipeline#configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#region ObservabilityadminTelemetryPipeline#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#tags ObservabilityadminTelemetryPipeline#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfig.property.timeouts"></a>

```csharp
public ObservabilityadminTelemetryPipelineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts">ObservabilityadminTelemetryPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#timeouts ObservabilityadminTelemetryPipeline#timeouts}

---

### ObservabilityadminTelemetryPipelineConfiguration <a name="ObservabilityadminTelemetryPipelineConfiguration" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryPipelineConfiguration {
    string Body
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration.property.body">Body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#body ObservabilityadminTelemetryPipeline#body}. |

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#body ObservabilityadminTelemetryPipeline#body}.

---

### ObservabilityadminTelemetryPipelineTimeouts <a name="ObservabilityadminTelemetryPipelineTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryPipelineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#create ObservabilityadminTelemetryPipeline#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#delete ObservabilityadminTelemetryPipeline#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_pipeline#update ObservabilityadminTelemetryPipeline#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminTelemetryPipelineConfigurationList <a name="ObservabilityadminTelemetryPipelineConfigurationList" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryPipelineConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.get"></a>

```csharp
private ObservabilityadminTelemetryPipelineConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryPipelineConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a>[]

---


### ObservabilityadminTelemetryPipelineConfigurationOutputReference <a name="ObservabilityadminTelemetryPipelineConfigurationOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryPipelineConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryPipelineConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineConfiguration">ObservabilityadminTelemetryPipelineConfiguration</a>

---


### ObservabilityadminTelemetryPipelineTimeoutsOutputReference <a name="ObservabilityadminTelemetryPipelineTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryPipelineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts">ObservabilityadminTelemetryPipelineTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryPipelineTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryPipeline.ObservabilityadminTelemetryPipelineTimeouts">ObservabilityadminTelemetryPipelineTimeouts</a>

---



