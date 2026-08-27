# `prometheusAnomalyDetector` Submodule <a name="`prometheusAnomalyDetector` Submodule" id="@cdktn/provider-aws.prometheusAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusAnomalyDetector <a name="PrometheusAnomalyDetector" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector aws_prometheus_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetector(Construct Scope, string Id, PrometheusAnomalyDetectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig">PrometheusAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig">PrometheusAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putMissingDataAction">PutMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetEvaluationIntervalInSeconds">ResetEvaluationIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetMissingDataAction">ResetMissingDataAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putConfiguration"></a>

```csharp
private void PutConfiguration(IResolvable|PrometheusAnomalyDetectorConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>[]

---

##### `PutMissingDataAction` <a name="PutMissingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putMissingDataAction"></a>

```csharp
private void PutMissingDataAction(IResolvable|PrometheusAnomalyDetectorMissingDataAction[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putMissingDataAction.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putTimeouts"></a>

```csharp
private void PutTimeouts(PrometheusAnomalyDetectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetEvaluationIntervalInSeconds` <a name="ResetEvaluationIntervalInSeconds" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetEvaluationIntervalInSeconds"></a>

```csharp
private void ResetEvaluationIntervalInSeconds()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMissingDataAction` <a name="ResetMissingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetMissingDataAction"></a>

```csharp
private void ResetMissingDataAction()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PrometheusAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PrometheusAnomalyDetector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PrometheusAnomalyDetector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PrometheusAnomalyDetector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PrometheusAnomalyDetector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PrometheusAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrometheusAnomalyDetector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrometheusAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PrometheusAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList">PrometheusAnomalyDetectorConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.missingDataAction">MissingDataAction</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList">PrometheusAnomalyDetectorMissingDataActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference">PrometheusAnomalyDetectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.evaluationIntervalInSecondsInput">EvaluationIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.missingDataActionInput">MissingDataActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.evaluationIntervalInSeconds">EvaluationIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.configuration"></a>

```csharp
public PrometheusAnomalyDetectorConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList">PrometheusAnomalyDetectorConfigurationList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MissingDataAction`<sup>Required</sup> <a name="MissingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.missingDataAction"></a>

```csharp
public PrometheusAnomalyDetectorMissingDataActionList MissingDataAction { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList">PrometheusAnomalyDetectorMissingDataActionList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.timeouts"></a>

```csharp
public PrometheusAnomalyDetectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference">PrometheusAnomalyDetectorTimeoutsOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.configurationInput"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfiguration[] ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>[]

---

##### `EvaluationIntervalInSecondsInput`<sup>Optional</sup> <a name="EvaluationIntervalInSecondsInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.evaluationIntervalInSecondsInput"></a>

```csharp
public double EvaluationIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MissingDataActionInput`<sup>Optional</sup> <a name="MissingDataActionInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.missingDataActionInput"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorMissingDataAction[] MissingDataActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.timeoutsInput"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `EvaluationIntervalInSeconds`<sup>Required</sup> <a name="EvaluationIntervalInSeconds" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.evaluationIntervalInSeconds"></a>

```csharp
public double EvaluationIntervalInSeconds { get; }
```

- *Type:* double

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusAnomalyDetectorConfig <a name="PrometheusAnomalyDetectorConfig" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Alias,
    string WorkspaceId,
    IResolvable|PrometheusAnomalyDetectorConfiguration[] Configuration = null,
    double EvaluationIntervalInSeconds = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    IResolvable|PrometheusAnomalyDetectorMissingDataAction[] MissingDataAction = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    PrometheusAnomalyDetectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#alias PrometheusAnomalyDetector#alias}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#workspace_id PrometheusAnomalyDetector#workspace_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.configuration">Configuration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.evaluationIntervalInSeconds">EvaluationIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#evaluation_interval_in_seconds PrometheusAnomalyDetector#evaluation_interval_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#labels PrometheusAnomalyDetector#labels}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.missingDataAction">MissingDataAction</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>[]</code> | missing_data_action block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#tags PrometheusAnomalyDetector#tags}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#alias PrometheusAnomalyDetector#alias}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#workspace_id PrometheusAnomalyDetector#workspace_id}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.configuration"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfiguration[] Configuration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#configuration PrometheusAnomalyDetector#configuration}

---

##### `EvaluationIntervalInSeconds`<sup>Optional</sup> <a name="EvaluationIntervalInSeconds" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.evaluationIntervalInSeconds"></a>

```csharp
public double EvaluationIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#evaluation_interval_in_seconds PrometheusAnomalyDetector#evaluation_interval_in_seconds}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#labels PrometheusAnomalyDetector#labels}.

---

##### `MissingDataAction`<sup>Optional</sup> <a name="MissingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.missingDataAction"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorMissingDataAction[] MissingDataAction { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>[]

missing_data_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#missing_data_action PrometheusAnomalyDetector#missing_data_action}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#region PrometheusAnomalyDetector#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#tags PrometheusAnomalyDetector#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfig.property.timeouts"></a>

```csharp
public PrometheusAnomalyDetectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#timeouts PrometheusAnomalyDetector#timeouts}

---

### PrometheusAnomalyDetectorConfiguration <a name="PrometheusAnomalyDetectorConfiguration" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfiguration {
    IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForest[] RandomCutForest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration.property.randomCutForest">RandomCutForest</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>[]</code> | random_cut_forest block. |

---

##### `RandomCutForest`<sup>Optional</sup> <a name="RandomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration.property.randomCutForest"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForest[] RandomCutForest { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>[]

random_cut_forest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#random_cut_forest PrometheusAnomalyDetector#random_cut_forest}

---

### PrometheusAnomalyDetectorConfigurationRandomCutForest <a name="PrometheusAnomalyDetectorConfigurationRandomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForest {
    string Query,
    IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove[] IgnoreNearExpectedFromAbove = null,
    IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow[] IgnoreNearExpectedFromBelow = null,
    double SampleSize = null,
    double ShingleSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#query PrometheusAnomalyDetector#query}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove">IgnoreNearExpectedFromAbove</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>[]</code> | ignore_near_expected_from_above block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow">IgnoreNearExpectedFromBelow</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>[]</code> | ignore_near_expected_from_below block. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.sampleSize">SampleSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#sample_size PrometheusAnomalyDetector#sample_size}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.shingleSize">ShingleSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#shingle_size PrometheusAnomalyDetector#shingle_size}. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#query PrometheusAnomalyDetector#query}.

---

##### `IgnoreNearExpectedFromAbove`<sup>Optional</sup> <a name="IgnoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromAbove"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove[] IgnoreNearExpectedFromAbove { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>[]

ignore_near_expected_from_above block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ignore_near_expected_from_above PrometheusAnomalyDetector#ignore_near_expected_from_above}

---

##### `IgnoreNearExpectedFromBelow`<sup>Optional</sup> <a name="IgnoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.ignoreNearExpectedFromBelow"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow[] IgnoreNearExpectedFromBelow { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>[]

ignore_near_expected_from_below block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ignore_near_expected_from_below PrometheusAnomalyDetector#ignore_near_expected_from_below}

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.sampleSize"></a>

```csharp
public double SampleSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#sample_size PrometheusAnomalyDetector#sample_size}.

---

##### `ShingleSize`<sup>Optional</sup> <a name="ShingleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest.property.shingleSize"></a>

```csharp
public double ShingleSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#shingle_size PrometheusAnomalyDetector#shingle_size}.

---

### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove {
    double Amount = null,
    double Ratio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount">Amount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio">Ratio</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}. |

---

##### `Amount`<sup>Optional</sup> <a name="Amount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.amount"></a>

```csharp
public double Amount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}.

---

##### `Ratio`<sup>Optional</sup> <a name="Ratio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.property.ratio"></a>

```csharp
public double Ratio { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}.

---

### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow {
    double Amount = null,
    double Ratio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount">Amount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio">Ratio</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}. |

---

##### `Amount`<sup>Optional</sup> <a name="Amount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.amount"></a>

```csharp
public double Amount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#amount PrometheusAnomalyDetector#amount}.

---

##### `Ratio`<sup>Optional</sup> <a name="Ratio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.property.ratio"></a>

```csharp
public double Ratio { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#ratio PrometheusAnomalyDetector#ratio}.

---

### PrometheusAnomalyDetectorMissingDataAction <a name="PrometheusAnomalyDetectorMissingDataAction" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorMissingDataAction {
    bool|IResolvable MarkAsAnomaly = null,
    bool|IResolvable Skip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.property.markAsAnomaly">MarkAsAnomaly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#mark_as_anomaly PrometheusAnomalyDetector#mark_as_anomaly}. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.property.skip">Skip</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#skip PrometheusAnomalyDetector#skip}. |

---

##### `MarkAsAnomaly`<sup>Optional</sup> <a name="MarkAsAnomaly" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.property.markAsAnomaly"></a>

```csharp
public bool|IResolvable MarkAsAnomaly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#mark_as_anomaly PrometheusAnomalyDetector#mark_as_anomaly}.

---

##### `Skip`<sup>Optional</sup> <a name="Skip" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction.property.skip"></a>

```csharp
public bool|IResolvable Skip { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#skip PrometheusAnomalyDetector#skip}.

---

### PrometheusAnomalyDetectorTimeouts <a name="PrometheusAnomalyDetectorTimeouts" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#create PrometheusAnomalyDetector#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#delete PrometheusAnomalyDetector#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_anomaly_detector#update PrometheusAnomalyDetector#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusAnomalyDetectorConfigurationList <a name="PrometheusAnomalyDetectorConfigurationList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.get"></a>

```csharp
private PrometheusAnomalyDetectorConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>[]

---


### PrometheusAnomalyDetectorConfigurationOutputReference <a name="PrometheusAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.putRandomCutForest">PutRandomCutForest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resetRandomCutForest">ResetRandomCutForest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRandomCutForest` <a name="PutRandomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.putRandomCutForest"></a>

```csharp
private void PutRandomCutForest(IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForest[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.putRandomCutForest.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>[]

---

##### `ResetRandomCutForest` <a name="ResetRandomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.resetRandomCutForest"></a>

```csharp
private void ResetRandomCutForest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.randomCutForest">RandomCutForest</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList">PrometheusAnomalyDetectorConfigurationRandomCutForestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput">RandomCutForestInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RandomCutForest`<sup>Required</sup> <a name="RandomCutForest" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.randomCutForest"></a>

```csharp
public PrometheusAnomalyDetectorConfigurationRandomCutForestList RandomCutForest { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList">PrometheusAnomalyDetectorConfigurationRandomCutForestList</a>

---

##### `RandomCutForestInput`<sup>Optional</sup> <a name="RandomCutForestInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.randomCutForestInput"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForest[] RandomCutForestInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfiguration">PrometheusAnomalyDetectorConfiguration</a>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.get"></a>

```csharp
private PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>[]

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount">ResetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio">ResetRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmount` <a name="ResetAmount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetAmount"></a>

```csharp
private void ResetAmount()
```

##### `ResetRatio` <a name="ResetRatio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resetRatio"></a>

```csharp
private void ResetRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput">AmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput">RatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio">Ratio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amountInput"></a>

```csharp
public double AmountInput { get; }
```

- *Type:* double

---

##### `RatioInput`<sup>Optional</sup> <a name="RatioInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratioInput"></a>

```csharp
public double RatioInput { get; }
```

- *Type:* double

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `Ratio`<sup>Required</sup> <a name="Ratio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio"></a>

```csharp
public double Ratio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.get"></a>

```csharp
private PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>[]

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount">ResetAmount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio">ResetRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmount` <a name="ResetAmount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetAmount"></a>

```csharp
private void ResetAmount()
```

##### `ResetRatio` <a name="ResetRatio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resetRatio"></a>

```csharp
private void ResetRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput">AmountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput">RatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio">Ratio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amountInput"></a>

```csharp
public double AmountInput { get; }
```

- *Type:* double

---

##### `RatioInput`<sup>Optional</sup> <a name="RatioInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratioInput"></a>

```csharp
public double RatioInput { get; }
```

- *Type:* double

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `Ratio`<sup>Required</sup> <a name="Ratio" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio"></a>

```csharp
public double Ratio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestList <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.get"></a>

```csharp
private PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForest[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>[]

---


### PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference <a name="PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove">PutIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow">PutIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove">ResetIgnoreNearExpectedFromAbove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow">ResetIgnoreNearExpectedFromBelow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize">ResetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize">ResetShingleSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIgnoreNearExpectedFromAbove` <a name="PutIgnoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove"></a>

```csharp
private void PutIgnoreNearExpectedFromAbove(IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromAbove.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>[]

---

##### `PutIgnoreNearExpectedFromBelow` <a name="PutIgnoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow"></a>

```csharp
private void PutIgnoreNearExpectedFromBelow(IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.putIgnoreNearExpectedFromBelow.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>[]

---

##### `ResetIgnoreNearExpectedFromAbove` <a name="ResetIgnoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromAbove"></a>

```csharp
private void ResetIgnoreNearExpectedFromAbove()
```

##### `ResetIgnoreNearExpectedFromBelow` <a name="ResetIgnoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetIgnoreNearExpectedFromBelow"></a>

```csharp
private void ResetIgnoreNearExpectedFromBelow()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetSampleSize"></a>

```csharp
private void ResetSampleSize()
```

##### `ResetShingleSize` <a name="ResetShingleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.resetShingleSize"></a>

```csharp
private void ResetShingleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove">IgnoreNearExpectedFromAbove</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow">IgnoreNearExpectedFromBelow</a></code> | <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput">IgnoreNearExpectedFromAboveInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput">IgnoreNearExpectedFromBelowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput">ShingleSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize">SampleSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize">ShingleSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreNearExpectedFromAbove`<sup>Required</sup> <a name="IgnoreNearExpectedFromAbove" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove"></a>

```csharp
public PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList IgnoreNearExpectedFromAbove { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveList</a>

---

##### `IgnoreNearExpectedFromBelow`<sup>Required</sup> <a name="IgnoreNearExpectedFromBelow" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow"></a>

```csharp
public PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList IgnoreNearExpectedFromBelow { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowList</a>

---

##### `IgnoreNearExpectedFromAboveInput`<sup>Optional</sup> <a name="IgnoreNearExpectedFromAboveInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAboveInput"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove[] IgnoreNearExpectedFromAboveInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>[]

---

##### `IgnoreNearExpectedFromBelowInput`<sup>Optional</sup> <a name="IgnoreNearExpectedFromBelowInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelowInput"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow[] IgnoreNearExpectedFromBelowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">PrometheusAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>[]

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSizeInput"></a>

```csharp
public double SampleSizeInput { get; }
```

- *Type:* double

---

##### `ShingleSizeInput`<sup>Optional</sup> <a name="ShingleSizeInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSizeInput"></a>

```csharp
public double ShingleSizeInput { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize"></a>

```csharp
public double SampleSize { get; }
```

- *Type:* double

---

##### `ShingleSize`<sup>Required</sup> <a name="ShingleSize" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize"></a>

```csharp
public double ShingleSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorConfigurationRandomCutForest InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorConfigurationRandomCutForest">PrometheusAnomalyDetectorConfigurationRandomCutForest</a>

---


### PrometheusAnomalyDetectorMissingDataActionList <a name="PrometheusAnomalyDetectorMissingDataActionList" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorMissingDataActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.get"></a>

```csharp
private PrometheusAnomalyDetectorMissingDataActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionList.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorMissingDataAction[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>[]

---


### PrometheusAnomalyDetectorMissingDataActionOutputReference <a name="PrometheusAnomalyDetectorMissingDataActionOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorMissingDataActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly">ResetMarkAsAnomaly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resetSkip">ResetSkip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMarkAsAnomaly` <a name="ResetMarkAsAnomaly" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resetMarkAsAnomaly"></a>

```csharp
private void ResetMarkAsAnomaly()
```

##### `ResetSkip` <a name="ResetSkip" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.resetSkip"></a>

```csharp
private void ResetSkip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput">MarkAsAnomalyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.skipInput">SkipInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly">MarkAsAnomaly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.skip">Skip</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MarkAsAnomalyInput`<sup>Optional</sup> <a name="MarkAsAnomalyInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomalyInput"></a>

```csharp
public bool|IResolvable MarkAsAnomalyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipInput`<sup>Optional</sup> <a name="SkipInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.skipInput"></a>

```csharp
public bool|IResolvable SkipInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MarkAsAnomaly`<sup>Required</sup> <a name="MarkAsAnomaly" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly"></a>

```csharp
public bool|IResolvable MarkAsAnomaly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Skip`<sup>Required</sup> <a name="Skip" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.skip"></a>

```csharp
public bool|IResolvable Skip { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorMissingDataAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorMissingDataAction">PrometheusAnomalyDetectorMissingDataAction</a>

---


### PrometheusAnomalyDetectorTimeoutsOutputReference <a name="PrometheusAnomalyDetectorTimeoutsOutputReference" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PrometheusAnomalyDetectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrometheusAnomalyDetectorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusAnomalyDetector.PrometheusAnomalyDetectorTimeouts">PrometheusAnomalyDetectorTimeouts</a>

---



