# `sagemakerPipeline` Submodule <a name="`sagemakerPipeline` Submodule" id="@cdktn/provider-aws.sagemakerPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerPipeline <a name="SagemakerPipeline" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline aws_sagemaker_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerPipeline(Construct Scope, string Id, SagemakerPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig">SagemakerPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig">SagemakerPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration">PutParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location">PutPipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetParallelismConfiguration">ResetParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinition">ResetPipelineDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinitionS3Location">ResetPipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDescription">ResetPipelineDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParallelismConfiguration` <a name="PutParallelismConfiguration" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration"></a>

```csharp
private void PutParallelismConfiguration(SagemakerPipelineParallelismConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.putParallelismConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---

##### `PutPipelineDefinitionS3Location` <a name="PutPipelineDefinitionS3Location" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location"></a>

```csharp
private void PutPipelineDefinitionS3Location(SagemakerPipelinePipelineDefinitionS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.putPipelineDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParallelismConfiguration` <a name="ResetParallelismConfiguration" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetParallelismConfiguration"></a>

```csharp
private void ResetParallelismConfiguration()
```

##### `ResetPipelineDefinition` <a name="ResetPipelineDefinition" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinition"></a>

```csharp
private void ResetPipelineDefinition()
```

##### `ResetPipelineDefinitionS3Location` <a name="ResetPipelineDefinitionS3Location" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDefinitionS3Location"></a>

```csharp
private void ResetPipelineDefinitionS3Location()
```

##### `ResetPipelineDescription` <a name="ResetPipelineDescription" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetPipelineDescription"></a>

```csharp
private void ResetPipelineDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SagemakerPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerPipeline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfiguration">ParallelismConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference">SagemakerPipelineParallelismConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3Location">PipelineDefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference">SagemakerPipelinePipelineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfigurationInput">ParallelismConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionInput">PipelineDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3LocationInput">PipelineDefinitionS3LocationInput</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescriptionInput">PipelineDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayNameInput">PipelineDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineNameInput">PipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinition">PipelineDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescription">PipelineDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayName">PipelineDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineName">PipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ParallelismConfiguration`<sup>Required</sup> <a name="ParallelismConfiguration" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfiguration"></a>

```csharp
public SagemakerPipelineParallelismConfigurationOutputReference ParallelismConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference">SagemakerPipelineParallelismConfigurationOutputReference</a>

---

##### `PipelineDefinitionS3Location`<sup>Required</sup> <a name="PipelineDefinitionS3Location" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3Location"></a>

```csharp
public SagemakerPipelinePipelineDefinitionS3LocationOutputReference PipelineDefinitionS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference">SagemakerPipelinePipelineDefinitionS3LocationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParallelismConfigurationInput`<sup>Optional</sup> <a name="ParallelismConfigurationInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.parallelismConfigurationInput"></a>

```csharp
public SagemakerPipelineParallelismConfiguration ParallelismConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---

##### `PipelineDefinitionInput`<sup>Optional</sup> <a name="PipelineDefinitionInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionInput"></a>

```csharp
public string PipelineDefinitionInput { get; }
```

- *Type:* string

---

##### `PipelineDefinitionS3LocationInput`<sup>Optional</sup> <a name="PipelineDefinitionS3LocationInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinitionS3LocationInput"></a>

```csharp
public SagemakerPipelinePipelineDefinitionS3Location PipelineDefinitionS3LocationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---

##### `PipelineDescriptionInput`<sup>Optional</sup> <a name="PipelineDescriptionInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescriptionInput"></a>

```csharp
public string PipelineDescriptionInput { get; }
```

- *Type:* string

---

##### `PipelineDisplayNameInput`<sup>Optional</sup> <a name="PipelineDisplayNameInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayNameInput"></a>

```csharp
public string PipelineDisplayNameInput { get; }
```

- *Type:* string

---

##### `PipelineNameInput`<sup>Optional</sup> <a name="PipelineNameInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineNameInput"></a>

```csharp
public string PipelineNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PipelineDefinition`<sup>Required</sup> <a name="PipelineDefinition" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDefinition"></a>

```csharp
public string PipelineDefinition { get; }
```

- *Type:* string

---

##### `PipelineDescription`<sup>Required</sup> <a name="PipelineDescription" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDescription"></a>

```csharp
public string PipelineDescription { get; }
```

- *Type:* string

---

##### `PipelineDisplayName`<sup>Required</sup> <a name="PipelineDisplayName" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineDisplayName"></a>

```csharp
public string PipelineDisplayName { get; }
```

- *Type:* string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.pipelineName"></a>

```csharp
public string PipelineName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerPipelineConfig <a name="SagemakerPipelineConfig" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerPipelineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PipelineDisplayName,
    string PipelineName,
    string Id = null,
    SagemakerPipelineParallelismConfiguration ParallelismConfiguration = null,
    string PipelineDefinition = null,
    SagemakerPipelinePipelineDefinitionS3Location PipelineDefinitionS3Location = null,
    string PipelineDescription = null,
    string Region = null,
    string RoleArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDisplayName">PipelineDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineName">PipelineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.parallelismConfiguration">ParallelismConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | parallelism_configuration block. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinition">PipelineDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinitionS3Location">PipelineDefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | pipeline_definition_s3_location block. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDescription">PipelineDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PipelineDisplayName`<sup>Required</sup> <a name="PipelineDisplayName" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDisplayName"></a>

```csharp
public string PipelineDisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}.

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineName"></a>

```csharp
public string PipelineName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParallelismConfiguration`<sup>Optional</sup> <a name="ParallelismConfiguration" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.parallelismConfiguration"></a>

```csharp
public SagemakerPipelineParallelismConfiguration ParallelismConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

parallelism_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}

---

##### `PipelineDefinition`<sup>Optional</sup> <a name="PipelineDefinition" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinition"></a>

```csharp
public string PipelineDefinition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}.

---

##### `PipelineDefinitionS3Location`<sup>Optional</sup> <a name="PipelineDefinitionS3Location" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDefinitionS3Location"></a>

```csharp
public SagemakerPipelinePipelineDefinitionS3Location PipelineDefinitionS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

pipeline_definition_s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}

---

##### `PipelineDescription`<sup>Optional</sup> <a name="PipelineDescription" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.pipelineDescription"></a>

```csharp
public string PipelineDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#region SagemakerPipeline#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}.

---

### SagemakerPipelineParallelismConfiguration <a name="SagemakerPipelineParallelismConfiguration" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerPipelineParallelismConfiguration {
    double MaxParallelExecutionSteps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.property.maxParallelExecutionSteps">MaxParallelExecutionSteps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}. |

---

##### `MaxParallelExecutionSteps`<sup>Required</sup> <a name="MaxParallelExecutionSteps" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration.property.maxParallelExecutionSteps"></a>

```csharp
public double MaxParallelExecutionSteps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}.

---

### SagemakerPipelinePipelineDefinitionS3Location <a name="SagemakerPipelinePipelineDefinitionS3Location" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerPipelinePipelineDefinitionS3Location {
    string Bucket,
    string ObjectKey,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.objectKey">ObjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#object_key SagemakerPipeline#object_key}. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#version_id SagemakerPipeline#version_id}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}.

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.objectKey"></a>

```csharp
public string ObjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#object_key SagemakerPipeline#object_key}.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/sagemaker_pipeline#version_id SagemakerPipeline#version_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerPipelineParallelismConfigurationOutputReference <a name="SagemakerPipelineParallelismConfigurationOutputReference" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerPipelineParallelismConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionStepsInput">MaxParallelExecutionStepsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionSteps">MaxParallelExecutionSteps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxParallelExecutionStepsInput`<sup>Optional</sup> <a name="MaxParallelExecutionStepsInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionStepsInput"></a>

```csharp
public double MaxParallelExecutionStepsInput { get; }
```

- *Type:* double

---

##### `MaxParallelExecutionSteps`<sup>Required</sup> <a name="MaxParallelExecutionSteps" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.maxParallelExecutionSteps"></a>

```csharp
public double MaxParallelExecutionSteps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfigurationOutputReference.property.internalValue"></a>

```csharp
public SagemakerPipelineParallelismConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelineParallelismConfiguration">SagemakerPipelineParallelismConfiguration</a>

---


### SagemakerPipelinePipelineDefinitionS3LocationOutputReference <a name="SagemakerPipelinePipelineDefinitionS3LocationOutputReference" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SagemakerPipelinePipelineDefinitionS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.resetVersionId"></a>

```csharp
private void ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKeyInput">ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ObjectKeyInput`<sup>Optional</sup> <a name="ObjectKeyInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKeyInput"></a>

```csharp
public string ObjectKeyInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.objectKey"></a>

```csharp
public string ObjectKey { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3LocationOutputReference.property.internalValue"></a>

```csharp
public SagemakerPipelinePipelineDefinitionS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.sagemakerPipeline.SagemakerPipelinePipelineDefinitionS3Location">SagemakerPipelinePipelineDefinitionS3Location</a>

---



