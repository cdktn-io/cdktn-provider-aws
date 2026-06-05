# `sagemakerLabelingJob` Submodule <a name="`sagemakerLabelingJob` Submodule" id="@cdktn/provider-aws.sagemakerLabelingJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerLabelingJob <a name="SagemakerLabelingJob" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job aws_sagemaker_labeling_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJob(Construct Scope, string Id, SagemakerLabelingJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig">SagemakerLabelingJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig">SagemakerLabelingJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig">PutHumanTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig">PutInputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig">PutLabelingJobAlgorithmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig">PutOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions">PutStoppingConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetHumanTaskConfig">ResetHumanTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetInputConfig">ResetInputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelCategoryConfigS3Uri">ResetLabelCategoryConfigS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelingJobAlgorithmsConfig">ResetLabelingJobAlgorithmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOutputConfig">ResetOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetStoppingConditions">ResetStoppingConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHumanTaskConfig` <a name="PutHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig"></a>

```csharp
private void PutHumanTaskConfig(IResolvable|SagemakerLabelingJobHumanTaskConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putHumanTaskConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]

---

##### `PutInputConfig` <a name="PutInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig"></a>

```csharp
private void PutInputConfig(IResolvable|SagemakerLabelingJobInputConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putInputConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]

---

##### `PutLabelingJobAlgorithmsConfig` <a name="PutLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig"></a>

```csharp
private void PutLabelingJobAlgorithmsConfig(IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putLabelingJobAlgorithmsConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]

---

##### `PutOutputConfig` <a name="PutOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig"></a>

```csharp
private void PutOutputConfig(IResolvable|SagemakerLabelingJobOutputConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putOutputConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]

---

##### `PutStoppingConditions` <a name="PutStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions"></a>

```csharp
private void PutStoppingConditions(IResolvable|SagemakerLabelingJobStoppingConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.putStoppingConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]

---

##### `ResetHumanTaskConfig` <a name="ResetHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetHumanTaskConfig"></a>

```csharp
private void ResetHumanTaskConfig()
```

##### `ResetInputConfig` <a name="ResetInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetInputConfig"></a>

```csharp
private void ResetInputConfig()
```

##### `ResetLabelCategoryConfigS3Uri` <a name="ResetLabelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelCategoryConfigS3Uri"></a>

```csharp
private void ResetLabelCategoryConfigS3Uri()
```

##### `ResetLabelingJobAlgorithmsConfig` <a name="ResetLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetLabelingJobAlgorithmsConfig"></a>

```csharp
private void ResetLabelingJobAlgorithmsConfig()
```

##### `ResetOutputConfig` <a name="ResetOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetOutputConfig"></a>

```csharp
private void ResetOutputConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStoppingConditions` <a name="ResetStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetStoppingConditions"></a>

```csharp
private void ResetStoppingConditions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerLabelingJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerLabelingJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerLabelingJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerLabelingJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerLabelingJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerLabelingJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerLabelingJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerLabelingJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerLabelingJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfig">HumanTaskConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList">SagemakerLabelingJobHumanTaskConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfig">InputConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList">SagemakerLabelingJobInputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.jobReferenceCode">JobReferenceCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCounters">LabelCounters</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList">SagemakerLabelingJobLabelCountersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfig">LabelingJobAlgorithmsConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobArn">LabelingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobStatus">LabelingJobStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList">SagemakerLabelingJobOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditions">StoppingConditions</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList">SagemakerLabelingJobStoppingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfigInput">HumanTaskConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfigInput">InputConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeNameInput">LabelAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3UriInput">LabelCategoryConfigS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfigInput">LabelingJobAlgorithmsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobNameInput">LabelingJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfigInput">OutputConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditionsInput">StoppingConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeName">LabelAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3Uri">LabelCategoryConfigS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobName">LabelingJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `HumanTaskConfig`<sup>Required</sup> <a name="HumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfig"></a>

```csharp
public SagemakerLabelingJobHumanTaskConfigList HumanTaskConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList">SagemakerLabelingJobHumanTaskConfigList</a>

---

##### `InputConfig`<sup>Required</sup> <a name="InputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfig"></a>

```csharp
public SagemakerLabelingJobInputConfigList InputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList">SagemakerLabelingJobInputConfigList</a>

---

##### `JobReferenceCode`<sup>Required</sup> <a name="JobReferenceCode" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.jobReferenceCode"></a>

```csharp
public string JobReferenceCode { get; }
```

- *Type:* string

---

##### `LabelCounters`<sup>Required</sup> <a name="LabelCounters" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCounters"></a>

```csharp
public SagemakerLabelingJobLabelCountersList LabelCounters { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList">SagemakerLabelingJobLabelCountersList</a>

---

##### `LabelingJobAlgorithmsConfig`<sup>Required</sup> <a name="LabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfig"></a>

```csharp
public SagemakerLabelingJobLabelingJobAlgorithmsConfigList LabelingJobAlgorithmsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigList</a>

---

##### `LabelingJobArn`<sup>Required</sup> <a name="LabelingJobArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobArn"></a>

```csharp
public string LabelingJobArn { get; }
```

- *Type:* string

---

##### `LabelingJobStatus`<sup>Required</sup> <a name="LabelingJobStatus" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobStatus"></a>

```csharp
public string LabelingJobStatus { get; }
```

- *Type:* string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfig"></a>

```csharp
public SagemakerLabelingJobOutputConfigList OutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList">SagemakerLabelingJobOutputConfigList</a>

---

##### `StoppingConditions`<sup>Required</sup> <a name="StoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditions"></a>

```csharp
public SagemakerLabelingJobStoppingConditionsList StoppingConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList">SagemakerLabelingJobStoppingConditionsList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `HumanTaskConfigInput`<sup>Optional</sup> <a name="HumanTaskConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.humanTaskConfigInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfig[] HumanTaskConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]

---

##### `InputConfigInput`<sup>Optional</sup> <a name="InputConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.inputConfigInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfig[] InputConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]

---

##### `LabelAttributeNameInput`<sup>Optional</sup> <a name="LabelAttributeNameInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeNameInput"></a>

```csharp
public string LabelAttributeNameInput { get; }
```

- *Type:* string

---

##### `LabelCategoryConfigS3UriInput`<sup>Optional</sup> <a name="LabelCategoryConfigS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3UriInput"></a>

```csharp
public string LabelCategoryConfigS3UriInput { get; }
```

- *Type:* string

---

##### `LabelingJobAlgorithmsConfigInput`<sup>Optional</sup> <a name="LabelingJobAlgorithmsConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobAlgorithmsConfigInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfig[] LabelingJobAlgorithmsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]

---

##### `LabelingJobNameInput`<sup>Optional</sup> <a name="LabelingJobNameInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobNameInput"></a>

```csharp
public string LabelingJobNameInput { get; }
```

- *Type:* string

---

##### `OutputConfigInput`<sup>Optional</sup> <a name="OutputConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.outputConfigInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobOutputConfig[] OutputConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StoppingConditionsInput`<sup>Optional</sup> <a name="StoppingConditionsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.stoppingConditionsInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobStoppingConditions[] StoppingConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelAttributeName`<sup>Required</sup> <a name="LabelAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelAttributeName"></a>

```csharp
public string LabelAttributeName { get; }
```

- *Type:* string

---

##### `LabelCategoryConfigS3Uri`<sup>Required</sup> <a name="LabelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelCategoryConfigS3Uri"></a>

```csharp
public string LabelCategoryConfigS3Uri { get; }
```

- *Type:* string

---

##### `LabelingJobName`<sup>Required</sup> <a name="LabelingJobName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.labelingJobName"></a>

```csharp
public string LabelingJobName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerLabelingJobConfig <a name="SagemakerLabelingJobConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LabelAttributeName,
    string LabelingJobName,
    string RoleArn,
    IResolvable|SagemakerLabelingJobHumanTaskConfig[] HumanTaskConfig = null,
    IResolvable|SagemakerLabelingJobInputConfig[] InputConfig = null,
    string LabelCategoryConfigS3Uri = null,
    IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfig[] LabelingJobAlgorithmsConfig = null,
    IResolvable|SagemakerLabelingJobOutputConfig[] OutputConfig = null,
    string Region = null,
    IResolvable|SagemakerLabelingJobStoppingConditions[] StoppingConditions = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelAttributeName">LabelAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobName">LabelingJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.humanTaskConfig">HumanTaskConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]</code> | human_task_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.inputConfig">InputConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]</code> | input_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelCategoryConfigS3Uri">LabelCategoryConfigS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobAlgorithmsConfig">LabelingJobAlgorithmsConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]</code> | labeling_job_algorithms_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.outputConfig">OutputConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]</code> | output_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.stoppingConditions">StoppingConditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LabelAttributeName`<sup>Required</sup> <a name="LabelAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelAttributeName"></a>

```csharp
public string LabelAttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#label_attribute_name SagemakerLabelingJob#label_attribute_name}.

---

##### `LabelingJobName`<sup>Required</sup> <a name="LabelingJobName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobName"></a>

```csharp
public string LabelingJobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#labeling_job_name SagemakerLabelingJob#labeling_job_name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#role_arn SagemakerLabelingJob#role_arn}.

---

##### `HumanTaskConfig`<sup>Optional</sup> <a name="HumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.humanTaskConfig"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfig[] HumanTaskConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]

human_task_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#human_task_config SagemakerLabelingJob#human_task_config}

---

##### `InputConfig`<sup>Optional</sup> <a name="InputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.inputConfig"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfig[] InputConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]

input_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#input_config SagemakerLabelingJob#input_config}

---

##### `LabelCategoryConfigS3Uri`<sup>Optional</sup> <a name="LabelCategoryConfigS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelCategoryConfigS3Uri"></a>

```csharp
public string LabelCategoryConfigS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#label_category_config_s3_uri SagemakerLabelingJob#label_category_config_s3_uri}.

---

##### `LabelingJobAlgorithmsConfig`<sup>Optional</sup> <a name="LabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.labelingJobAlgorithmsConfig"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfig[] LabelingJobAlgorithmsConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]

labeling_job_algorithms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithms_config SagemakerLabelingJob#labeling_job_algorithms_config}

---

##### `OutputConfig`<sup>Optional</sup> <a name="OutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.outputConfig"></a>

```csharp
public IResolvable|SagemakerLabelingJobOutputConfig[] OutputConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#output_config SagemakerLabelingJob#output_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#region SagemakerLabelingJob#region}

---

##### `StoppingConditions`<sup>Optional</sup> <a name="StoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.stoppingConditions"></a>

```csharp
public IResolvable|SagemakerLabelingJobStoppingConditions[] StoppingConditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#stopping_conditions SagemakerLabelingJob#stopping_conditions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#tags SagemakerLabelingJob#tags}.

---

### SagemakerLabelingJobHumanTaskConfig <a name="SagemakerLabelingJobHumanTaskConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfig {
    double NumberOfHumanWorkersPerDataObject,
    string TaskDescription,
    double TaskTimeLimitInSeconds,
    string TaskTitle,
    string WorkteamArn,
    IResolvable|SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[] AnnotationConsolidationConfig = null,
    double MaxConcurrentTaskCount = null,
    string PreHumanTaskLambdaArn = null,
    IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[] PublicWorkforceTaskPrice = null,
    double TaskAvailabilityLifetimeInSeconds = null,
    string[] TaskKeywords = null,
    IResolvable|SagemakerLabelingJobHumanTaskConfigUiConfig[] UiConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.numberOfHumanWorkersPerDataObject">NumberOfHumanWorkersPerDataObject</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskDescription">TaskDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTimeLimitInSeconds">TaskTimeLimitInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTitle">TaskTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.workteamArn">WorkteamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.annotationConsolidationConfig">AnnotationConsolidationConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]</code> | annotation_consolidation_config block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.maxConcurrentTaskCount">MaxConcurrentTaskCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.preHumanTaskLambdaArn">PreHumanTaskLambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.publicWorkforceTaskPrice">PublicWorkforceTaskPrice</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]</code> | public_workforce_task_price block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskAvailabilityLifetimeInSeconds">TaskAvailabilityLifetimeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskKeywords">TaskKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.uiConfig">UiConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]</code> | ui_config block. |

---

##### `NumberOfHumanWorkersPerDataObject`<sup>Required</sup> <a name="NumberOfHumanWorkersPerDataObject" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.numberOfHumanWorkersPerDataObject"></a>

```csharp
public double NumberOfHumanWorkersPerDataObject { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#number_of_human_workers_per_data_object SagemakerLabelingJob#number_of_human_workers_per_data_object}.

---

##### `TaskDescription`<sup>Required</sup> <a name="TaskDescription" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskDescription"></a>

```csharp
public string TaskDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_description SagemakerLabelingJob#task_description}.

---

##### `TaskTimeLimitInSeconds`<sup>Required</sup> <a name="TaskTimeLimitInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTimeLimitInSeconds"></a>

```csharp
public double TaskTimeLimitInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_time_limit_in_seconds SagemakerLabelingJob#task_time_limit_in_seconds}.

---

##### `TaskTitle`<sup>Required</sup> <a name="TaskTitle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskTitle"></a>

```csharp
public string TaskTitle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_title SagemakerLabelingJob#task_title}.

---

##### `WorkteamArn`<sup>Required</sup> <a name="WorkteamArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.workteamArn"></a>

```csharp
public string WorkteamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#workteam_arn SagemakerLabelingJob#workteam_arn}.

---

##### `AnnotationConsolidationConfig`<sup>Optional</sup> <a name="AnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.annotationConsolidationConfig"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[] AnnotationConsolidationConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]

annotation_consolidation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_config SagemakerLabelingJob#annotation_consolidation_config}

---

##### `MaxConcurrentTaskCount`<sup>Optional</sup> <a name="MaxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.maxConcurrentTaskCount"></a>

```csharp
public double MaxConcurrentTaskCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#max_concurrent_task_count SagemakerLabelingJob#max_concurrent_task_count}.

---

##### `PreHumanTaskLambdaArn`<sup>Optional</sup> <a name="PreHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.preHumanTaskLambdaArn"></a>

```csharp
public string PreHumanTaskLambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#pre_human_task_lambda_arn SagemakerLabelingJob#pre_human_task_lambda_arn}.

---

##### `PublicWorkforceTaskPrice`<sup>Optional</sup> <a name="PublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.publicWorkforceTaskPrice"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[] PublicWorkforceTaskPrice { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#public_workforce_task_price SagemakerLabelingJob#public_workforce_task_price}

---

##### `TaskAvailabilityLifetimeInSeconds`<sup>Optional</sup> <a name="TaskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```csharp
public double TaskAvailabilityLifetimeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_availability_lifetime_in_seconds SagemakerLabelingJob#task_availability_lifetime_in_seconds}.

---

##### `TaskKeywords`<sup>Optional</sup> <a name="TaskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.taskKeywords"></a>

```csharp
public string[] TaskKeywords { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#task_keywords SagemakerLabelingJob#task_keywords}.

---

##### `UiConfig`<sup>Optional</sup> <a name="UiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig.property.uiConfig"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigUiConfig[] UiConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]

ui_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#ui_config SagemakerLabelingJob#ui_config}

---

### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig {
    string AnnotationConsolidationLambdaArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.property.annotationConsolidationLambdaArn">AnnotationConsolidationLambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}. |

---

##### `AnnotationConsolidationLambdaArn`<sup>Required</sup> <a name="AnnotationConsolidationLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig.property.annotationConsolidationLambdaArn"></a>

```csharp
public string AnnotationConsolidationLambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#annotation_consolidation_lambda_arn SagemakerLabelingJob#annotation_consolidation_lambda_arn}.

---

### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice {
    IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[] AmountInUsd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.property.amountInUsd">AmountInUsd</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]</code> | amount_in_usd block. |

---

##### `AmountInUsd`<sup>Optional</sup> <a name="AmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[] AmountInUsd { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]

amount_in_usd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#amount_in_usd SagemakerLabelingJob#amount_in_usd}

---

### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd {
    double Cents = null,
    double Dollars = null,
    double TenthFractionsOfACent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">Cents</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">Dollars</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">TenthFractionsOfACent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}. |

---

##### `Cents`<sup>Optional</sup> <a name="Cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```csharp
public double Cents { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#cents SagemakerLabelingJob#cents}.

---

##### `Dollars`<sup>Optional</sup> <a name="Dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```csharp
public double Dollars { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#dollars SagemakerLabelingJob#dollars}.

---

##### `TenthFractionsOfACent`<sup>Optional</sup> <a name="TenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```csharp
public double TenthFractionsOfACent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#tenth_fractions_of_a_cent SagemakerLabelingJob#tenth_fractions_of_a_cent}.

---

### SagemakerLabelingJobHumanTaskConfigUiConfig <a name="SagemakerLabelingJobHumanTaskConfigUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigUiConfig {
    string HumanTaskUiArn = null,
    string UiTemplateS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.humanTaskUiArn">HumanTaskUiArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.uiTemplateS3Uri">UiTemplateS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}. |

---

##### `HumanTaskUiArn`<sup>Optional</sup> <a name="HumanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.humanTaskUiArn"></a>

```csharp
public string HumanTaskUiArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#human_task_ui_arn SagemakerLabelingJob#human_task_ui_arn}.

---

##### `UiTemplateS3Uri`<sup>Optional</sup> <a name="UiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig.property.uiTemplateS3Uri"></a>

```csharp
public string UiTemplateS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#ui_template_s3_uri SagemakerLabelingJob#ui_template_s3_uri}.

---

### SagemakerLabelingJobInputConfig <a name="SagemakerLabelingJobInputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfig {
    IResolvable|SagemakerLabelingJobInputConfigDataAttributes[] DataAttributes = null,
    IResolvable|SagemakerLabelingJobInputConfigDataSource[] DataSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataAttributes">DataAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]</code> | data_attributes block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataSource">DataSource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]</code> | data_source block. |

---

##### `DataAttributes`<sup>Optional</sup> <a name="DataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataAttributes"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataAttributes[] DataAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]

data_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#data_attributes SagemakerLabelingJob#data_attributes}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig.property.dataSource"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSource[] DataSource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#data_source SagemakerLabelingJob#data_source}

---

### SagemakerLabelingJobInputConfigDataAttributes <a name="SagemakerLabelingJobInputConfigDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataAttributes {
    string[] ContentClassifiers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.property.contentClassifiers">ContentClassifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}. |

---

##### `ContentClassifiers`<sup>Optional</sup> <a name="ContentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes.property.contentClassifiers"></a>

```csharp
public string[] ContentClassifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#content_classifiers SagemakerLabelingJob#content_classifiers}.

---

### SagemakerLabelingJobInputConfigDataSource <a name="SagemakerLabelingJobInputConfigDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSource {
    IResolvable|SagemakerLabelingJobInputConfigDataSourceS3DataSource[] S3DataSource = null,
    IResolvable|SagemakerLabelingJobInputConfigDataSourceSnsDataSource[] SnsDataSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.s3DataSource">S3DataSource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]</code> | s3_data_source block. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.snsDataSource">SnsDataSource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]</code> | sns_data_source block. |

---

##### `S3DataSource`<sup>Optional</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.s3DataSource"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSourceS3DataSource[] S3DataSource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]

s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#s3_data_source SagemakerLabelingJob#s3_data_source}

---

##### `SnsDataSource`<sup>Optional</sup> <a name="SnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource.property.snsDataSource"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSourceSnsDataSource[] SnsDataSource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]

sns_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#sns_data_source SagemakerLabelingJob#sns_data_source}

---

### SagemakerLabelingJobInputConfigDataSourceS3DataSource <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSourceS3DataSource {
    string ManifestS3Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.property.manifestS3Uri">ManifestS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}. |

---

##### `ManifestS3Uri`<sup>Required</sup> <a name="ManifestS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource.property.manifestS3Uri"></a>

```csharp
public string ManifestS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#manifest_s3_uri SagemakerLabelingJob#manifest_s3_uri}.

---

### SagemakerLabelingJobInputConfigDataSourceSnsDataSource <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSourceSnsDataSource {
    string SnsTopicArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}. |

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}.

---

### SagemakerLabelingJobLabelCounters <a name="SagemakerLabelingJobLabelCounters" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelCounters {

};
```


### SagemakerLabelingJobLabelingJobAlgorithmsConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfig {
    string LabelingJobAlgorithmSpecificationArn,
    string InitialActiveLearningModelArn = null,
    IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[] LabelingJobResourceConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobAlgorithmSpecificationArn">LabelingJobAlgorithmSpecificationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.initialActiveLearningModelArn">InitialActiveLearningModelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobResourceConfig">LabelingJobResourceConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]</code> | labeling_job_resource_config block. |

---

##### `LabelingJobAlgorithmSpecificationArn`<sup>Required</sup> <a name="LabelingJobAlgorithmSpecificationArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobAlgorithmSpecificationArn"></a>

```csharp
public string LabelingJobAlgorithmSpecificationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#labeling_job_algorithm_specification_arn SagemakerLabelingJob#labeling_job_algorithm_specification_arn}.

---

##### `InitialActiveLearningModelArn`<sup>Optional</sup> <a name="InitialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.initialActiveLearningModelArn"></a>

```csharp
public string InitialActiveLearningModelArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#initial_active_learning_model_arn SagemakerLabelingJob#initial_active_learning_model_arn}.

---

##### `LabelingJobResourceConfig`<sup>Optional</sup> <a name="LabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig.property.labelingJobResourceConfig"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[] LabelingJobResourceConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]

labeling_job_resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#labeling_job_resource_config SagemakerLabelingJob#labeling_job_resource_config}

---

### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig {
    string VolumeKmsKeyId = null,
    IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[] VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.vpcConfig">VpcConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]</code> | vpc_config block. |

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#volume_kms_key_id SagemakerLabelingJob#volume_kms_key_id}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig.property.vpcConfig"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[] VpcConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#vpc_config SagemakerLabelingJob#vpc_config}

---

### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig {
    string[] SecurityGroupIds,
    string[] Subnets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#security_group_ids SagemakerLabelingJob#security_group_ids}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#subnets SagemakerLabelingJob#subnets}.

---

### SagemakerLabelingJobOutputConfig <a name="SagemakerLabelingJobOutputConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobOutputConfig {
    string S3OutputPath,
    string KmsKeyId = null,
    string SnsTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}. |

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#s3_output_path SagemakerLabelingJob#s3_output_path}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#kms_key_id SagemakerLabelingJob#kms_key_id}.

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#sns_topic_arn SagemakerLabelingJob#sns_topic_arn}.

---

### SagemakerLabelingJobStoppingConditions <a name="SagemakerLabelingJobStoppingConditions" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobStoppingConditions {
    double MaxHumanLabeledObjectCount = null,
    double MaxPercentageOfInputDatasetLabeled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxHumanLabeledObjectCount">MaxHumanLabeledObjectCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxPercentageOfInputDatasetLabeled">MaxPercentageOfInputDatasetLabeled</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}. |

---

##### `MaxHumanLabeledObjectCount`<sup>Optional</sup> <a name="MaxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxHumanLabeledObjectCount"></a>

```csharp
public double MaxHumanLabeledObjectCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#max_human_labeled_object_count SagemakerLabelingJob#max_human_labeled_object_count}.

---

##### `MaxPercentageOfInputDatasetLabeled`<sup>Optional</sup> <a name="MaxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions.property.maxPercentageOfInputDatasetLabeled"></a>

```csharp
public double MaxPercentageOfInputDatasetLabeled { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/sagemaker_labeling_job#max_percentage_of_input_dataset_labeled SagemakerLabelingJob#max_percentage_of_input_dataset_labeled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get"></a>

```csharp
private SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]

---


### SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArnInput">AnnotationConsolidationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArn">AnnotationConsolidationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnnotationConsolidationLambdaArnInput`<sup>Optional</sup> <a name="AnnotationConsolidationLambdaArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArnInput"></a>

```csharp
public string AnnotationConsolidationLambdaArnInput { get; }
```

- *Type:* string

---

##### `AnnotationConsolidationLambdaArn`<sup>Required</sup> <a name="AnnotationConsolidationLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.annotationConsolidationLambdaArn"></a>

```csharp
public string AnnotationConsolidationLambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>

---


### SagemakerLabelingJobHumanTaskConfigList <a name="SagemakerLabelingJobHumanTaskConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get"></a>

```csharp
private SagemakerLabelingJobHumanTaskConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>[]

---


### SagemakerLabelingJobHumanTaskConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig">PutAnnotationConsolidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice">PutPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig">PutUiConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetAnnotationConsolidationConfig">ResetAnnotationConsolidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetMaxConcurrentTaskCount">ResetMaxConcurrentTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPreHumanTaskLambdaArn">ResetPreHumanTaskLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPublicWorkforceTaskPrice">ResetPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">ResetTaskAvailabilityLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskKeywords">ResetTaskKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetUiConfig">ResetUiConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnnotationConsolidationConfig` <a name="PutAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig"></a>

```csharp
private void PutAnnotationConsolidationConfig(IResolvable|SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putAnnotationConsolidationConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]

---

##### `PutPublicWorkforceTaskPrice` <a name="PutPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```csharp
private void PutPublicWorkforceTaskPrice(IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putPublicWorkforceTaskPrice.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]

---

##### `PutUiConfig` <a name="PutUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig"></a>

```csharp
private void PutUiConfig(IResolvable|SagemakerLabelingJobHumanTaskConfigUiConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.putUiConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]

---

##### `ResetAnnotationConsolidationConfig` <a name="ResetAnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetAnnotationConsolidationConfig"></a>

```csharp
private void ResetAnnotationConsolidationConfig()
```

##### `ResetMaxConcurrentTaskCount` <a name="ResetMaxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetMaxConcurrentTaskCount"></a>

```csharp
private void ResetMaxConcurrentTaskCount()
```

##### `ResetPreHumanTaskLambdaArn` <a name="ResetPreHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPreHumanTaskLambdaArn"></a>

```csharp
private void ResetPreHumanTaskLambdaArn()
```

##### `ResetPublicWorkforceTaskPrice` <a name="ResetPublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```csharp
private void ResetPublicWorkforceTaskPrice()
```

##### `ResetTaskAvailabilityLifetimeInSeconds` <a name="ResetTaskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```csharp
private void ResetTaskAvailabilityLifetimeInSeconds()
```

##### `ResetTaskKeywords` <a name="ResetTaskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetTaskKeywords"></a>

```csharp
private void ResetTaskKeywords()
```

##### `ResetUiConfig` <a name="ResetUiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.resetUiConfig"></a>

```csharp
private void ResetUiConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfig">AnnotationConsolidationConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPrice">PublicWorkforceTaskPrice</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfig">UiConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList">SagemakerLabelingJobHumanTaskConfigUiConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfigInput">AnnotationConsolidationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCountInput">MaxConcurrentTaskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObjectInput">NumberOfHumanWorkersPerDataObjectInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArnInput">PreHumanTaskLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPriceInput">PublicWorkforceTaskPriceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">TaskAvailabilityLifetimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescriptionInput">TaskDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywordsInput">TaskKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSecondsInput">TaskTimeLimitInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitleInput">TaskTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfigInput">UiConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArnInput">WorkteamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCount">MaxConcurrentTaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObject">NumberOfHumanWorkersPerDataObject</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArn">PreHumanTaskLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">TaskAvailabilityLifetimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescription">TaskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywords">TaskKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSeconds">TaskTimeLimitInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitle">TaskTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArn">WorkteamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnnotationConsolidationConfig`<sup>Required</sup> <a name="AnnotationConsolidationConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfig"></a>

```csharp
public SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList AnnotationConsolidationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfigList</a>

---

##### `PublicWorkforceTaskPrice`<sup>Required</sup> <a name="PublicWorkforceTaskPrice" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```csharp
public SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList PublicWorkforceTaskPrice { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList</a>

---

##### `UiConfig`<sup>Required</sup> <a name="UiConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfig"></a>

```csharp
public SagemakerLabelingJobHumanTaskConfigUiConfigList UiConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList">SagemakerLabelingJobHumanTaskConfigUiConfigList</a>

---

##### `AnnotationConsolidationConfigInput`<sup>Optional</sup> <a name="AnnotationConsolidationConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.annotationConsolidationConfigInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig[] AnnotationConsolidationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig">SagemakerLabelingJobHumanTaskConfigAnnotationConsolidationConfig</a>[]

---

##### `MaxConcurrentTaskCountInput`<sup>Optional</sup> <a name="MaxConcurrentTaskCountInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCountInput"></a>

```csharp
public double MaxConcurrentTaskCountInput { get; }
```

- *Type:* double

---

##### `NumberOfHumanWorkersPerDataObjectInput`<sup>Optional</sup> <a name="NumberOfHumanWorkersPerDataObjectInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObjectInput"></a>

```csharp
public double NumberOfHumanWorkersPerDataObjectInput { get; }
```

- *Type:* double

---

##### `PreHumanTaskLambdaArnInput`<sup>Optional</sup> <a name="PreHumanTaskLambdaArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArnInput"></a>

```csharp
public string PreHumanTaskLambdaArnInput { get; }
```

- *Type:* string

---

##### `PublicWorkforceTaskPriceInput`<sup>Optional</sup> <a name="PublicWorkforceTaskPriceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[] PublicWorkforceTaskPriceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]

---

##### `TaskAvailabilityLifetimeInSecondsInput`<sup>Optional</sup> <a name="TaskAvailabilityLifetimeInSecondsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```csharp
public double TaskAvailabilityLifetimeInSecondsInput { get; }
```

- *Type:* double

---

##### `TaskDescriptionInput`<sup>Optional</sup> <a name="TaskDescriptionInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescriptionInput"></a>

```csharp
public string TaskDescriptionInput { get; }
```

- *Type:* string

---

##### `TaskKeywordsInput`<sup>Optional</sup> <a name="TaskKeywordsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywordsInput"></a>

```csharp
public string[] TaskKeywordsInput { get; }
```

- *Type:* string[]

---

##### `TaskTimeLimitInSecondsInput`<sup>Optional</sup> <a name="TaskTimeLimitInSecondsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```csharp
public double TaskTimeLimitInSecondsInput { get; }
```

- *Type:* double

---

##### `TaskTitleInput`<sup>Optional</sup> <a name="TaskTitleInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitleInput"></a>

```csharp
public string TaskTitleInput { get; }
```

- *Type:* string

---

##### `UiConfigInput`<sup>Optional</sup> <a name="UiConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.uiConfigInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigUiConfig[] UiConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]

---

##### `WorkteamArnInput`<sup>Optional</sup> <a name="WorkteamArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArnInput"></a>

```csharp
public string WorkteamArnInput { get; }
```

- *Type:* string

---

##### `MaxConcurrentTaskCount`<sup>Required</sup> <a name="MaxConcurrentTaskCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.maxConcurrentTaskCount"></a>

```csharp
public double MaxConcurrentTaskCount { get; }
```

- *Type:* double

---

##### `NumberOfHumanWorkersPerDataObject`<sup>Required</sup> <a name="NumberOfHumanWorkersPerDataObject" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.numberOfHumanWorkersPerDataObject"></a>

```csharp
public double NumberOfHumanWorkersPerDataObject { get; }
```

- *Type:* double

---

##### `PreHumanTaskLambdaArn`<sup>Required</sup> <a name="PreHumanTaskLambdaArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.preHumanTaskLambdaArn"></a>

```csharp
public string PreHumanTaskLambdaArn { get; }
```

- *Type:* string

---

##### `TaskAvailabilityLifetimeInSeconds`<sup>Required</sup> <a name="TaskAvailabilityLifetimeInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```csharp
public double TaskAvailabilityLifetimeInSeconds { get; }
```

- *Type:* double

---

##### `TaskDescription`<sup>Required</sup> <a name="TaskDescription" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskDescription"></a>

```csharp
public string TaskDescription { get; }
```

- *Type:* string

---

##### `TaskKeywords`<sup>Required</sup> <a name="TaskKeywords" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskKeywords"></a>

```csharp
public string[] TaskKeywords { get; }
```

- *Type:* string[]

---

##### `TaskTimeLimitInSeconds`<sup>Required</sup> <a name="TaskTimeLimitInSeconds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```csharp
public double TaskTimeLimitInSeconds { get; }
```

- *Type:* double

---

##### `TaskTitle`<sup>Required</sup> <a name="TaskTitle" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.taskTitle"></a>

```csharp
public string TaskTitle { get; }
```

- *Type:* string

---

##### `WorkteamArn`<sup>Required</sup> <a name="WorkteamArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.workteamArn"></a>

```csharp
public string WorkteamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfig">SagemakerLabelingJobHumanTaskConfig</a>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get"></a>

```csharp
private SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">ResetCents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">ResetDollars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">ResetTenthFractionsOfACent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCents` <a name="ResetCents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```csharp
private void ResetCents()
```

##### `ResetDollars` <a name="ResetDollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```csharp
private void ResetDollars()
```

##### `ResetTenthFractionsOfACent` <a name="ResetTenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```csharp
private void ResetTenthFractionsOfACent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">CentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">DollarsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">TenthFractionsOfACentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">Cents</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">Dollars</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">TenthFractionsOfACent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CentsInput`<sup>Optional</sup> <a name="CentsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```csharp
public double CentsInput { get; }
```

- *Type:* double

---

##### `DollarsInput`<sup>Optional</sup> <a name="DollarsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```csharp
public double DollarsInput { get; }
```

- *Type:* double

---

##### `TenthFractionsOfACentInput`<sup>Optional</sup> <a name="TenthFractionsOfACentInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```csharp
public double TenthFractionsOfACentInput { get; }
```

- *Type:* double

---

##### `Cents`<sup>Required</sup> <a name="Cents" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```csharp
public double Cents { get; }
```

- *Type:* double

---

##### `Dollars`<sup>Required</sup> <a name="Dollars" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```csharp
public double Dollars { get; }
```

- *Type:* double

---

##### `TenthFractionsOfACent`<sup>Required</sup> <a name="TenthFractionsOfACent" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```csharp
public double TenthFractionsOfACent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get"></a>

```csharp
private SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>[]

---


### SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">PutAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">ResetAmountInUsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmountInUsd` <a name="PutAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```csharp
private void PutAmountInUsd(IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]

---

##### `ResetAmountInUsd` <a name="ResetAmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```csharp
private void ResetAmountInUsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">AmountInUsd</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">AmountInUsdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmountInUsd`<sup>Required</sup> <a name="AmountInUsd" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```csharp
public SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList AmountInUsd { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsdList</a>

---

##### `AmountInUsdInput`<sup>Optional</sup> <a name="AmountInUsdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd[] AmountInUsdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceAmountInUsd</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice">SagemakerLabelingJobHumanTaskConfigPublicWorkforceTaskPrice</a>

---


### SagemakerLabelingJobHumanTaskConfigUiConfigList <a name="SagemakerLabelingJobHumanTaskConfigUiConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigUiConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get"></a>

```csharp
private SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigUiConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>[]

---


### SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference <a name="SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetHumanTaskUiArn">ResetHumanTaskUiArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetUiTemplateS3Uri">ResetUiTemplateS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHumanTaskUiArn` <a name="ResetHumanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetHumanTaskUiArn"></a>

```csharp
private void ResetHumanTaskUiArn()
```

##### `ResetUiTemplateS3Uri` <a name="ResetUiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.resetUiTemplateS3Uri"></a>

```csharp
private void ResetUiTemplateS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArnInput">HumanTaskUiArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3UriInput">UiTemplateS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArn">HumanTaskUiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3Uri">UiTemplateS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HumanTaskUiArnInput`<sup>Optional</sup> <a name="HumanTaskUiArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArnInput"></a>

```csharp
public string HumanTaskUiArnInput { get; }
```

- *Type:* string

---

##### `UiTemplateS3UriInput`<sup>Optional</sup> <a name="UiTemplateS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3UriInput"></a>

```csharp
public string UiTemplateS3UriInput { get; }
```

- *Type:* string

---

##### `HumanTaskUiArn`<sup>Required</sup> <a name="HumanTaskUiArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.humanTaskUiArn"></a>

```csharp
public string HumanTaskUiArn { get; }
```

- *Type:* string

---

##### `UiTemplateS3Uri`<sup>Required</sup> <a name="UiTemplateS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.uiTemplateS3Uri"></a>

```csharp
public string UiTemplateS3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobHumanTaskConfigUiConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobHumanTaskConfigUiConfig">SagemakerLabelingJobHumanTaskConfigUiConfig</a>

---


### SagemakerLabelingJobInputConfigDataAttributesList <a name="SagemakerLabelingJobInputConfigDataAttributesList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get"></a>

```csharp
private SagemakerLabelingJobInputConfigDataAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]

---


### SagemakerLabelingJobInputConfigDataAttributesOutputReference <a name="SagemakerLabelingJobInputConfigDataAttributesOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resetContentClassifiers">ResetContentClassifiers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentClassifiers` <a name="ResetContentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.resetContentClassifiers"></a>

```csharp
private void ResetContentClassifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiersInput">ContentClassifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiers">ContentClassifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentClassifiersInput`<sup>Optional</sup> <a name="ContentClassifiersInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiersInput"></a>

```csharp
public string[] ContentClassifiersInput { get; }
```

- *Type:* string[]

---

##### `ContentClassifiers`<sup>Required</sup> <a name="ContentClassifiers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.contentClassifiers"></a>

```csharp
public string[] ContentClassifiers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>

---


### SagemakerLabelingJobInputConfigDataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get"></a>

```csharp
private SagemakerLabelingJobInputConfigDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]

---


### SagemakerLabelingJobInputConfigDataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource">PutS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource">PutSnsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetS3DataSource">ResetS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetSnsDataSource">ResetSnsDataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3DataSource` <a name="PutS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource"></a>

```csharp
private void PutS3DataSource(IResolvable|SagemakerLabelingJobInputConfigDataSourceS3DataSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putS3DataSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]

---

##### `PutSnsDataSource` <a name="PutSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource"></a>

```csharp
private void PutSnsDataSource(IResolvable|SagemakerLabelingJobInputConfigDataSourceSnsDataSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.putSnsDataSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]

---

##### `ResetS3DataSource` <a name="ResetS3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetS3DataSource"></a>

```csharp
private void ResetS3DataSource()
```

##### `ResetSnsDataSource` <a name="ResetSnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.resetSnsDataSource"></a>

```csharp
private void ResetSnsDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList">SagemakerLabelingJobInputConfigDataSourceS3DataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSource">SnsDataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList">SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSourceInput">S3DataSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSourceInput">SnsDataSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSource"></a>

```csharp
public SagemakerLabelingJobInputConfigDataSourceS3DataSourceList S3DataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList">SagemakerLabelingJobInputConfigDataSourceS3DataSourceList</a>

---

##### `SnsDataSource`<sup>Required</sup> <a name="SnsDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSource"></a>

```csharp
public SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList SnsDataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList">SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList</a>

---

##### `S3DataSourceInput`<sup>Optional</sup> <a name="S3DataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.s3DataSourceInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSourceS3DataSource[] S3DataSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]

---

##### `SnsDataSourceInput`<sup>Optional</sup> <a name="SnsDataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.snsDataSourceInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSourceSnsDataSource[] SnsDataSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>

---


### SagemakerLabelingJobInputConfigDataSourceS3DataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSourceS3DataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get"></a>

```csharp
private SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSourceS3DataSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>[]

---


### SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3UriInput">ManifestS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3Uri">ManifestS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManifestS3UriInput`<sup>Optional</sup> <a name="ManifestS3UriInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3UriInput"></a>

```csharp
public string ManifestS3UriInput { get; }
```

- *Type:* string

---

##### `ManifestS3Uri`<sup>Required</sup> <a name="ManifestS3Uri" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.manifestS3Uri"></a>

```csharp
public string ManifestS3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSourceS3DataSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceS3DataSource">SagemakerLabelingJobInputConfigDataSourceS3DataSource</a>

---


### SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get"></a>

```csharp
private SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSourceSnsDataSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>[]

---


### SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference <a name="SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSourceSnsDataSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceSnsDataSource">SagemakerLabelingJobInputConfigDataSourceSnsDataSource</a>

---


### SagemakerLabelingJobInputConfigList <a name="SagemakerLabelingJobInputConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get"></a>

```csharp
private SagemakerLabelingJobInputConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>[]

---


### SagemakerLabelingJobInputConfigOutputReference <a name="SagemakerLabelingJobInputConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobInputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes">PutDataAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource">PutDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataAttributes">ResetDataAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataAttributes` <a name="PutDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes"></a>

```csharp
private void PutDataAttributes(IResolvable|SagemakerLabelingJobInputConfigDataAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]

---

##### `PutDataSource` <a name="PutDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource"></a>

```csharp
private void PutDataSource(IResolvable|SagemakerLabelingJobInputConfigDataSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]

---

##### `ResetDataAttributes` <a name="ResetDataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataAttributes"></a>

```csharp
private void ResetDataAttributes()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.resetDataSource"></a>

```csharp
private void ResetDataSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributes">DataAttributes</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList">SagemakerLabelingJobInputConfigDataAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList">SagemakerLabelingJobInputConfigDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributesInput">DataAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataAttributes`<sup>Required</sup> <a name="DataAttributes" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributes"></a>

```csharp
public SagemakerLabelingJobInputConfigDataAttributesList DataAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributesList">SagemakerLabelingJobInputConfigDataAttributesList</a>

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSource"></a>

```csharp
public SagemakerLabelingJobInputConfigDataSourceList DataSource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSourceList">SagemakerLabelingJobInputConfigDataSourceList</a>

---

##### `DataAttributesInput`<sup>Optional</sup> <a name="DataAttributesInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataAttributesInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataAttributes[] DataAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataAttributes">SagemakerLabelingJobInputConfigDataAttributes</a>[]

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.dataSourceInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfigDataSource[] DataSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigDataSource">SagemakerLabelingJobInputConfigDataSource</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobInputConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobInputConfig">SagemakerLabelingJobInputConfig</a>

---


### SagemakerLabelingJobLabelCountersList <a name="SagemakerLabelingJobLabelCountersList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelCountersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get"></a>

```csharp
private SagemakerLabelingJobLabelCountersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SagemakerLabelingJobLabelCountersOutputReference <a name="SagemakerLabelingJobLabelCountersOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelCountersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.failedNonRetryableError">FailedNonRetryableError</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.humanLabeled">HumanLabeled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.machineLabeled">MachineLabeled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.totalLabeled">TotalLabeled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.unlabeled">Unlabeled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters">SagemakerLabelingJobLabelCounters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailedNonRetryableError`<sup>Required</sup> <a name="FailedNonRetryableError" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.failedNonRetryableError"></a>

```csharp
public double FailedNonRetryableError { get; }
```

- *Type:* double

---

##### `HumanLabeled`<sup>Required</sup> <a name="HumanLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.humanLabeled"></a>

```csharp
public double HumanLabeled { get; }
```

- *Type:* double

---

##### `MachineLabeled`<sup>Required</sup> <a name="MachineLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.machineLabeled"></a>

```csharp
public double MachineLabeled { get; }
```

- *Type:* double

---

##### `TotalLabeled`<sup>Required</sup> <a name="TotalLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.totalLabeled"></a>

```csharp
public double TotalLabeled { get; }
```

- *Type:* double

---

##### `Unlabeled`<sup>Required</sup> <a name="Unlabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.unlabeled"></a>

```csharp
public double Unlabeled { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCountersOutputReference.property.internalValue"></a>

```csharp
public SagemakerLabelingJobLabelCounters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelCounters">SagemakerLabelingJobLabelCounters</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get"></a>

```csharp
private SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig"></a>

```csharp
private void PutVpcConfig(IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]

---

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVolumeKmsKeyId"></a>

```csharp
private void ResetVolumeKmsKeyId()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfig"></a>

```csharp
public SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList</a>

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```csharp
public string VolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.vpcConfigInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[] VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get"></a>

```csharp
private SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>[]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigVpcConfig</a>

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigList <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get"></a>

```csharp
private SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>[]

---


### SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference <a name="SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig">PutLabelingJobResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetInitialActiveLearningModelArn">ResetInitialActiveLearningModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetLabelingJobResourceConfig">ResetLabelingJobResourceConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelingJobResourceConfig` <a name="PutLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig"></a>

```csharp
private void PutLabelingJobResourceConfig(IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.putLabelingJobResourceConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]

---

##### `ResetInitialActiveLearningModelArn` <a name="ResetInitialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetInitialActiveLearningModelArn"></a>

```csharp
private void ResetInitialActiveLearningModelArn()
```

##### `ResetLabelingJobResourceConfig` <a name="ResetLabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.resetLabelingJobResourceConfig"></a>

```csharp
private void ResetLabelingJobResourceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfig">LabelingJobResourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArnInput">InitialActiveLearningModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArnInput">LabelingJobAlgorithmSpecificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfigInput">LabelingJobResourceConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArn">InitialActiveLearningModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArn">LabelingJobAlgorithmSpecificationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelingJobResourceConfig`<sup>Required</sup> <a name="LabelingJobResourceConfig" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfig"></a>

```csharp
public SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList LabelingJobResourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfigList</a>

---

##### `InitialActiveLearningModelArnInput`<sup>Optional</sup> <a name="InitialActiveLearningModelArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArnInput"></a>

```csharp
public string InitialActiveLearningModelArnInput { get; }
```

- *Type:* string

---

##### `LabelingJobAlgorithmSpecificationArnInput`<sup>Optional</sup> <a name="LabelingJobAlgorithmSpecificationArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArnInput"></a>

```csharp
public string LabelingJobAlgorithmSpecificationArnInput { get; }
```

- *Type:* string

---

##### `LabelingJobResourceConfigInput`<sup>Optional</sup> <a name="LabelingJobResourceConfigInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobResourceConfigInput"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig[] LabelingJobResourceConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfigLabelingJobResourceConfig</a>[]

---

##### `InitialActiveLearningModelArn`<sup>Required</sup> <a name="InitialActiveLearningModelArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.initialActiveLearningModelArn"></a>

```csharp
public string InitialActiveLearningModelArn { get; }
```

- *Type:* string

---

##### `LabelingJobAlgorithmSpecificationArn`<sup>Required</sup> <a name="LabelingJobAlgorithmSpecificationArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.labelingJobAlgorithmSpecificationArn"></a>

```csharp
public string LabelingJobAlgorithmSpecificationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobLabelingJobAlgorithmsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobLabelingJobAlgorithmsConfig">SagemakerLabelingJobLabelingJobAlgorithmsConfig</a>

---


### SagemakerLabelingJobOutputConfigList <a name="SagemakerLabelingJobOutputConfigList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobOutputConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get"></a>

```csharp
private SagemakerLabelingJobOutputConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobOutputConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>[]

---


### SagemakerLabelingJobOutputConfigOutputReference <a name="SagemakerLabelingJobOutputConfigOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPathInput">S3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `S3OutputPathInput`<sup>Optional</sup> <a name="S3OutputPathInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPathInput"></a>

```csharp
public string S3OutputPathInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.s3OutputPath"></a>

```csharp
public string S3OutputPath { get; }
```

- *Type:* string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobOutputConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobOutputConfig">SagemakerLabelingJobOutputConfig</a>

---


### SagemakerLabelingJobStoppingConditionsList <a name="SagemakerLabelingJobStoppingConditionsList" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobStoppingConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get"></a>

```csharp
private SagemakerLabelingJobStoppingConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobStoppingConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>[]

---


### SagemakerLabelingJobStoppingConditionsOutputReference <a name="SagemakerLabelingJobStoppingConditionsOutputReference" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerLabelingJobStoppingConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxHumanLabeledObjectCount">ResetMaxHumanLabeledObjectCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxPercentageOfInputDatasetLabeled">ResetMaxPercentageOfInputDatasetLabeled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxHumanLabeledObjectCount` <a name="ResetMaxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxHumanLabeledObjectCount"></a>

```csharp
private void ResetMaxHumanLabeledObjectCount()
```

##### `ResetMaxPercentageOfInputDatasetLabeled` <a name="ResetMaxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.resetMaxPercentageOfInputDatasetLabeled"></a>

```csharp
private void ResetMaxPercentageOfInputDatasetLabeled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCountInput">MaxHumanLabeledObjectCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeledInput">MaxPercentageOfInputDatasetLabeledInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCount">MaxHumanLabeledObjectCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeled">MaxPercentageOfInputDatasetLabeled</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxHumanLabeledObjectCountInput`<sup>Optional</sup> <a name="MaxHumanLabeledObjectCountInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCountInput"></a>

```csharp
public double MaxHumanLabeledObjectCountInput { get; }
```

- *Type:* double

---

##### `MaxPercentageOfInputDatasetLabeledInput`<sup>Optional</sup> <a name="MaxPercentageOfInputDatasetLabeledInput" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeledInput"></a>

```csharp
public double MaxPercentageOfInputDatasetLabeledInput { get; }
```

- *Type:* double

---

##### `MaxHumanLabeledObjectCount`<sup>Required</sup> <a name="MaxHumanLabeledObjectCount" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxHumanLabeledObjectCount"></a>

```csharp
public double MaxHumanLabeledObjectCount { get; }
```

- *Type:* double

---

##### `MaxPercentageOfInputDatasetLabeled`<sup>Required</sup> <a name="MaxPercentageOfInputDatasetLabeled" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.maxPercentageOfInputDatasetLabeled"></a>

```csharp
public double MaxPercentageOfInputDatasetLabeled { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerLabelingJobStoppingConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.sagemakerLabelingJob.SagemakerLabelingJobStoppingConditions">SagemakerLabelingJobStoppingConditions</a>

---



