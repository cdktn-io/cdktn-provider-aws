# `cloudwatchMetricAlarm` Submodule <a name="`cloudwatchMetricAlarm` Submodule" id="@cdktn/provider-aws.cloudwatchMetricAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricAlarm <a name="CloudwatchMetricAlarm" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarm(Construct Scope, string Id, CloudwatchMetricAlarmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig">CloudwatchMetricAlarmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig">CloudwatchMetricAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putEvaluationCriteria">PutEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery">PutMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled">ResetActionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions">ResetAlarmActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription">ResetAlarmDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm">ResetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles">ResetEvaluateLowSampleCountPercentiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluationCriteria">ResetEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluationInterval">ResetEvaluationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic">ResetExtendedStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions">ResetInsufficientDataActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery">ResetMetricQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions">ResetOkActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic">ResetStatistic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId">ResetThresholdMetricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData">ResetTreatMissingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEvaluationCriteria` <a name="PutEvaluationCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putEvaluationCriteria"></a>

```csharp
private void PutEvaluationCriteria(CloudwatchMetricAlarmEvaluationCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putEvaluationCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria">CloudwatchMetricAlarmEvaluationCriteria</a>

---

##### `PutMetricQuery` <a name="PutMetricQuery" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery"></a>

```csharp
private void PutMetricQuery(IResolvable|CloudwatchMetricAlarmMetricQuery[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.putMetricQuery.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]

---

##### `ResetActionsEnabled` <a name="ResetActionsEnabled" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetActionsEnabled"></a>

```csharp
private void ResetActionsEnabled()
```

##### `ResetAlarmActions` <a name="ResetAlarmActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmActions"></a>

```csharp
private void ResetAlarmActions()
```

##### `ResetAlarmDescription` <a name="ResetAlarmDescription" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetAlarmDescription"></a>

```csharp
private void ResetAlarmDescription()
```

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetComparisonOperator"></a>

```csharp
private void ResetComparisonOperator()
```

##### `ResetDatapointsToAlarm` <a name="ResetDatapointsToAlarm" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDatapointsToAlarm"></a>

```csharp
private void ResetDatapointsToAlarm()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetEvaluateLowSampleCountPercentiles` <a name="ResetEvaluateLowSampleCountPercentiles" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluateLowSampleCountPercentiles"></a>

```csharp
private void ResetEvaluateLowSampleCountPercentiles()
```

##### `ResetEvaluationCriteria` <a name="ResetEvaluationCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluationCriteria"></a>

```csharp
private void ResetEvaluationCriteria()
```

##### `ResetEvaluationInterval` <a name="ResetEvaluationInterval" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluationInterval"></a>

```csharp
private void ResetEvaluationInterval()
```

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetEvaluationPeriods"></a>

```csharp
private void ResetEvaluationPeriods()
```

##### `ResetExtendedStatistic` <a name="ResetExtendedStatistic" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetExtendedStatistic"></a>

```csharp
private void ResetExtendedStatistic()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsufficientDataActions` <a name="ResetInsufficientDataActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetInsufficientDataActions"></a>

```csharp
private void ResetInsufficientDataActions()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricName"></a>

```csharp
private void ResetMetricName()
```

##### `ResetMetricQuery` <a name="ResetMetricQuery" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetMetricQuery"></a>

```csharp
private void ResetMetricQuery()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOkActions` <a name="ResetOkActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetOkActions"></a>

```csharp
private void ResetOkActions()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetStatistic"></a>

```csharp
private void ResetStatistic()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThreshold"></a>

```csharp
private void ResetThreshold()
```

##### `ResetThresholdMetricId` <a name="ResetThresholdMetricId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetThresholdMetricId"></a>

```csharp
private void ResetThresholdMetricId()
```

##### `ResetTreatMissingData` <a name="ResetTreatMissingData" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetTreatMissingData"></a>

```csharp
private void ResetTreatMissingData()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.resetUnit"></a>

```csharp
private void ResetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchMetricAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchMetricAlarm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchMetricAlarm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchMetricAlarm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchMetricAlarm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchMetricAlarm resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchMetricAlarm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchMetricAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationCriteria">EvaluationCriteria</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference">CloudwatchMetricAlarmEvaluationCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery">MetricQuery</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput">ActionsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput">AlarmActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput">AlarmDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput">AlarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput">DatapointsToAlarmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput">EvaluateLowSampleCountPercentilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationCriteriaInput">EvaluationCriteriaInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria">CloudwatchMetricAlarmEvaluationCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationIntervalInput">EvaluationIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput">ExtendedStatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput">InsufficientDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput">MetricQueryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput">OkActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput">ThresholdMetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput">TreatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled">ActionsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions">AlarmActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription">AlarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName">AlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles">EvaluateLowSampleCountPercentiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationInterval">EvaluationInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic">ExtendedStatistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions">OkActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId">ThresholdMetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit">Unit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EvaluationCriteria`<sup>Required</sup> <a name="EvaluationCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationCriteria"></a>

```csharp
public CloudwatchMetricAlarmEvaluationCriteriaOutputReference EvaluationCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference">CloudwatchMetricAlarmEvaluationCriteriaOutputReference</a>

---

##### `MetricQuery`<sup>Required</sup> <a name="MetricQuery" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQuery"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryList MetricQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList">CloudwatchMetricAlarmMetricQueryList</a>

---

##### `ActionsEnabledInput`<sup>Optional</sup> <a name="ActionsEnabledInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabledInput"></a>

```csharp
public bool|IResolvable ActionsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlarmActionsInput`<sup>Optional</sup> <a name="AlarmActionsInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActionsInput"></a>

```csharp
public string[] AlarmActionsInput { get; }
```

- *Type:* string[]

---

##### `AlarmDescriptionInput`<sup>Optional</sup> <a name="AlarmDescriptionInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescriptionInput"></a>

```csharp
public string AlarmDescriptionInput { get; }
```

- *Type:* string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmNameInput"></a>

```csharp
public string AlarmNameInput { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `DatapointsToAlarmInput`<sup>Optional</sup> <a name="DatapointsToAlarmInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarmInput"></a>

```csharp
public double DatapointsToAlarmInput { get; }
```

- *Type:* double

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EvaluateLowSampleCountPercentilesInput`<sup>Optional</sup> <a name="EvaluateLowSampleCountPercentilesInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentilesInput"></a>

```csharp
public string EvaluateLowSampleCountPercentilesInput { get; }
```

- *Type:* string

---

##### `EvaluationCriteriaInput`<sup>Optional</sup> <a name="EvaluationCriteriaInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationCriteriaInput"></a>

```csharp
public CloudwatchMetricAlarmEvaluationCriteria EvaluationCriteriaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria">CloudwatchMetricAlarmEvaluationCriteria</a>

---

##### `EvaluationIntervalInput`<sup>Optional</sup> <a name="EvaluationIntervalInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationIntervalInput"></a>

```csharp
public double EvaluationIntervalInput { get; }
```

- *Type:* double

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `ExtendedStatisticInput`<sup>Optional</sup> <a name="ExtendedStatisticInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatisticInput"></a>

```csharp
public string ExtendedStatisticInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsufficientDataActionsInput`<sup>Optional</sup> <a name="InsufficientDataActionsInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActionsInput"></a>

```csharp
public string[] InsufficientDataActionsInput { get; }
```

- *Type:* string[]

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `MetricQueryInput`<sup>Optional</sup> <a name="MetricQueryInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricQueryInput"></a>

```csharp
public IResolvable|CloudwatchMetricAlarmMetricQuery[] MetricQueryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OkActionsInput`<sup>Optional</sup> <a name="OkActionsInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActionsInput"></a>

```csharp
public string[] OkActionsInput { get; }
```

- *Type:* string[]

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ThresholdMetricIdInput`<sup>Optional</sup> <a name="ThresholdMetricIdInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricIdInput"></a>

```csharp
public string ThresholdMetricIdInput { get; }
```

- *Type:* string

---

##### `TreatMissingDataInput`<sup>Optional</sup> <a name="TreatMissingDataInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingDataInput"></a>

```csharp
public string TreatMissingDataInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ActionsEnabled`<sup>Required</sup> <a name="ActionsEnabled" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.actionsEnabled"></a>

```csharp
public bool|IResolvable ActionsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlarmActions`<sup>Required</sup> <a name="AlarmActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmActions"></a>

```csharp
public string[] AlarmActions { get; }
```

- *Type:* string[]

---

##### `AlarmDescription`<sup>Required</sup> <a name="AlarmDescription" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmDescription"></a>

```csharp
public string AlarmDescription { get; }
```

- *Type:* string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.alarmName"></a>

```csharp
public string AlarmName { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `DatapointsToAlarm`<sup>Required</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.datapointsToAlarm"></a>

```csharp
public double DatapointsToAlarm { get; }
```

- *Type:* double

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EvaluateLowSampleCountPercentiles`<sup>Required</sup> <a name="EvaluateLowSampleCountPercentiles" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluateLowSampleCountPercentiles"></a>

```csharp
public string EvaluateLowSampleCountPercentiles { get; }
```

- *Type:* string

---

##### `EvaluationInterval`<sup>Required</sup> <a name="EvaluationInterval" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationInterval"></a>

```csharp
public double EvaluationInterval { get; }
```

- *Type:* double

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `ExtendedStatistic`<sup>Required</sup> <a name="ExtendedStatistic" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.extendedStatistic"></a>

```csharp
public string ExtendedStatistic { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsufficientDataActions`<sup>Required</sup> <a name="InsufficientDataActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.insufficientDataActions"></a>

```csharp
public string[] InsufficientDataActions { get; }
```

- *Type:* string[]

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OkActions`<sup>Required</sup> <a name="OkActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.okActions"></a>

```csharp
public string[] OkActions { get; }
```

- *Type:* string[]

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `ThresholdMetricId`<sup>Required</sup> <a name="ThresholdMetricId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.thresholdMetricId"></a>

```csharp
public string ThresholdMetricId { get; }
```

- *Type:* string

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricAlarmConfig <a name="CloudwatchMetricAlarmConfig" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AlarmName,
    bool|IResolvable ActionsEnabled = null,
    string[] AlarmActions = null,
    string AlarmDescription = null,
    string ComparisonOperator = null,
    double DatapointsToAlarm = null,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null,
    string EvaluateLowSampleCountPercentiles = null,
    CloudwatchMetricAlarmEvaluationCriteria EvaluationCriteria = null,
    double EvaluationInterval = null,
    double EvaluationPeriods = null,
    string ExtendedStatistic = null,
    string Id = null,
    string[] InsufficientDataActions = null,
    string MetricName = null,
    IResolvable|CloudwatchMetricAlarmMetricQuery[] MetricQuery = null,
    string Namespace = null,
    string[] OkActions = null,
    double Period = null,
    string Region = null,
    string Statistic = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double Threshold = null,
    string ThresholdMetricId = null,
    string TreatMissingData = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName">AlarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled">ActionsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions">AlarmActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription">AlarmDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles">EvaluateLowSampleCountPercentiles</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationCriteria">EvaluationCriteria</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria">CloudwatchMetricAlarmEvaluationCriteria</a></code> | evaluation_criteria block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationInterval">EvaluationInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#evaluation_interval CloudwatchMetricAlarm#evaluation_interval}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic">ExtendedStatistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions">InsufficientDataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery">MetricQuery</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]</code> | metric_query block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions">OkActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId">ThresholdMetricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmName"></a>

```csharp
public string AlarmName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}.

---

##### `ActionsEnabled`<sup>Optional</sup> <a name="ActionsEnabled" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.actionsEnabled"></a>

```csharp
public bool|IResolvable ActionsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}.

---

##### `AlarmActions`<sup>Optional</sup> <a name="AlarmActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmActions"></a>

```csharp
public string[] AlarmActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}.

---

##### `AlarmDescription`<sup>Optional</sup> <a name="AlarmDescription" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.alarmDescription"></a>

```csharp
public string AlarmDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}.

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}.

---

##### `DatapointsToAlarm`<sup>Optional</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.datapointsToAlarm"></a>

```csharp
public double DatapointsToAlarm { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `EvaluateLowSampleCountPercentiles`<sup>Optional</sup> <a name="EvaluateLowSampleCountPercentiles" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluateLowSampleCountPercentiles"></a>

```csharp
public string EvaluateLowSampleCountPercentiles { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}.

---

##### `EvaluationCriteria`<sup>Optional</sup> <a name="EvaluationCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationCriteria"></a>

```csharp
public CloudwatchMetricAlarmEvaluationCriteria EvaluationCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria">CloudwatchMetricAlarmEvaluationCriteria</a>

evaluation_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#evaluation_criteria CloudwatchMetricAlarm#evaluation_criteria}

---

##### `EvaluationInterval`<sup>Optional</sup> <a name="EvaluationInterval" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationInterval"></a>

```csharp
public double EvaluationInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#evaluation_interval CloudwatchMetricAlarm#evaluation_interval}.

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}.

---

##### `ExtendedStatistic`<sup>Optional</sup> <a name="ExtendedStatistic" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.extendedStatistic"></a>

```csharp
public string ExtendedStatistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsufficientDataActions`<sup>Optional</sup> <a name="InsufficientDataActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.insufficientDataActions"></a>

```csharp
public string[] InsufficientDataActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}.

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `MetricQuery`<sup>Optional</sup> <a name="MetricQuery" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.metricQuery"></a>

```csharp
public IResolvable|CloudwatchMetricAlarmMetricQuery[] MetricQuery { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]

metric_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `OkActions`<sup>Optional</sup> <a name="OkActions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.okActions"></a>

```csharp
public string[] OkActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#region CloudwatchMetricAlarm#region}

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}.

---

##### `ThresholdMetricId`<sup>Optional</sup> <a name="ThresholdMetricId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.thresholdMetricId"></a>

```csharp
public string ThresholdMetricId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}.

---

##### `TreatMissingData`<sup>Optional</sup> <a name="TreatMissingData" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmConfig.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

### CloudwatchMetricAlarmEvaluationCriteria <a name="CloudwatchMetricAlarmEvaluationCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmEvaluationCriteria {
    CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria PromqlCriteria
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria.property.promqlCriteria">PromqlCriteria</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria</a></code> | promql_criteria block. |

---

##### `PromqlCriteria`<sup>Required</sup> <a name="PromqlCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria.property.promqlCriteria"></a>

```csharp
public CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria PromqlCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria</a>

promql_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#promql_criteria CloudwatchMetricAlarm#promql_criteria}

---

### CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria <a name="CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria {
    string Query,
    double PendingPeriod = null,
    double RecoveryPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#query CloudwatchMetricAlarm#query}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria.property.pendingPeriod">PendingPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#pending_period CloudwatchMetricAlarm#pending_period}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria.property.recoveryPeriod">RecoveryPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#recovery_period CloudwatchMetricAlarm#recovery_period}. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#query CloudwatchMetricAlarm#query}.

---

##### `PendingPeriod`<sup>Optional</sup> <a name="PendingPeriod" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria.property.pendingPeriod"></a>

```csharp
public double PendingPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#pending_period CloudwatchMetricAlarm#pending_period}.

---

##### `RecoveryPeriod`<sup>Optional</sup> <a name="RecoveryPeriod" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria.property.recoveryPeriod"></a>

```csharp
public double RecoveryPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#recovery_period CloudwatchMetricAlarm#recovery_period}.

---

### CloudwatchMetricAlarmMetricQuery <a name="CloudwatchMetricAlarmMetricQuery" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmMetricQuery {
    string Id,
    string AccountId = null,
    string Expression = null,
    string Label = null,
    CloudwatchMetricAlarmMetricQueryMetric Metric = null,
    double Period = null,
    bool|IResolvable ReturnData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | metric block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData">ReturnData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.metric"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryMetric Metric { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#metric CloudwatchMetricAlarm#metric}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `ReturnData`<sup>Optional</sup> <a name="ReturnData" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery.property.returnData"></a>

```csharp
public bool|IResolvable ReturnData { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}.

---

### CloudwatchMetricAlarmMetricQueryMetric <a name="CloudwatchMetricAlarmMetricQueryMetric" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmMetricQueryMetric {
    string MetricName,
    double Period,
    string Stat,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null,
    string Namespace = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat">Stat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}.

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.stat"></a>

```csharp
public string Stat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricAlarmEvaluationCriteriaOutputReference <a name="CloudwatchMetricAlarmEvaluationCriteriaOutputReference" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmEvaluationCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.putPromqlCriteria">PutPromqlCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPromqlCriteria` <a name="PutPromqlCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.putPromqlCriteria"></a>

```csharp
private void PutPromqlCriteria(CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.putPromqlCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.promqlCriteria">PromqlCriteria</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.promqlCriteriaInput">PromqlCriteriaInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria">CloudwatchMetricAlarmEvaluationCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PromqlCriteria`<sup>Required</sup> <a name="PromqlCriteria" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.promqlCriteria"></a>

```csharp
public CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference PromqlCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference</a>

---

##### `PromqlCriteriaInput`<sup>Optional</sup> <a name="PromqlCriteriaInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.promqlCriteriaInput"></a>

```csharp
public CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria PromqlCriteriaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaOutputReference.property.internalValue"></a>

```csharp
public CloudwatchMetricAlarmEvaluationCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteria">CloudwatchMetricAlarmEvaluationCriteria</a>

---


### CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference <a name="CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.resetPendingPeriod">ResetPendingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.resetRecoveryPeriod">ResetRecoveryPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPendingPeriod` <a name="ResetPendingPeriod" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.resetPendingPeriod"></a>

```csharp
private void ResetPendingPeriod()
```

##### `ResetRecoveryPeriod` <a name="ResetRecoveryPeriod" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.resetRecoveryPeriod"></a>

```csharp
private void ResetRecoveryPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.pendingPeriodInput">PendingPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.recoveryPeriodInput">RecoveryPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.pendingPeriod">PendingPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.recoveryPeriod">RecoveryPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PendingPeriodInput`<sup>Optional</sup> <a name="PendingPeriodInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.pendingPeriodInput"></a>

```csharp
public double PendingPeriodInput { get; }
```

- *Type:* double

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RecoveryPeriodInput`<sup>Optional</sup> <a name="RecoveryPeriodInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.recoveryPeriodInput"></a>

```csharp
public double RecoveryPeriodInput { get; }
```

- *Type:* double

---

##### `PendingPeriod`<sup>Required</sup> <a name="PendingPeriod" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.pendingPeriod"></a>

```csharp
public double PendingPeriod { get; }
```

- *Type:* double

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RecoveryPeriod`<sup>Required</sup> <a name="RecoveryPeriod" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.recoveryPeriod"></a>

```csharp
public double RecoveryPeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteriaOutputReference.property.internalValue"></a>

```csharp
public CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria">CloudwatchMetricAlarmEvaluationCriteriaPromqlCriteria</a>

---


### CloudwatchMetricAlarmMetricQueryList <a name="CloudwatchMetricAlarmMetricQueryList" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmMetricQueryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get"></a>

```csharp
private CloudwatchMetricAlarmMetricQueryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricAlarmMetricQuery[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>[]

---


### CloudwatchMetricAlarmMetricQueryMetricOutputReference <a name="CloudwatchMetricAlarmMetricQueryMetricOutputReference" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmMetricQueryMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput">StatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat">Stat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `StatInput`<sup>Optional</sup> <a name="StatInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.statInput"></a>

```csharp
public string StatInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.stat"></a>

```csharp
public string Stat { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference.property.internalValue"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---


### CloudwatchMetricAlarmMetricQueryOutputReference <a name="CloudwatchMetricAlarmMetricQueryOutputReference" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchMetricAlarmMetricQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData">ResetReturnData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric"></a>

```csharp
private void PutMetric(CloudwatchMetricAlarmMetricQueryMetric Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetReturnData` <a name="ResetReturnData" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.resetReturnData"></a>

```csharp
private void ResetReturnData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput">ReturnDataInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData">ReturnData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metric"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetricOutputReference">CloudwatchMetricAlarmMetricQueryMetricOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.metricInput"></a>

```csharp
public CloudwatchMetricAlarmMetricQueryMetric MetricInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryMetric">CloudwatchMetricAlarmMetricQueryMetric</a>

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `ReturnDataInput`<sup>Optional</sup> <a name="ReturnDataInput" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnDataInput"></a>

```csharp
public bool|IResolvable ReturnDataInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.returnData"></a>

```csharp
public bool|IResolvable ReturnData { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQueryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchMetricAlarmMetricQuery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchMetricAlarm.CloudwatchMetricAlarmMetricQuery">CloudwatchMetricAlarmMetricQuery</a>

---



