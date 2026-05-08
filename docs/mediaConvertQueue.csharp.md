# `mediaConvertQueue` Submodule <a name="`mediaConvertQueue` Submodule" id="@cdktn/provider-aws.mediaConvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaConvertQueue <a name="MediaConvertQueue" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue aws_media_convert_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaConvertQueue(Construct Scope, string Id, MediaConvertQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig">MediaConvertQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig">MediaConvertQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings">PutReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetConcurrentJobs">ResetConcurrentJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetPricingPlan">ResetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings">ResetReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReservationPlanSettings` <a name="PutReservationPlanSettings" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings"></a>

```csharp
private void PutReservationPlanSettings(MediaConvertQueueReservationPlanSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `ResetConcurrentJobs` <a name="ResetConcurrentJobs" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetConcurrentJobs"></a>

```csharp
private void ResetConcurrentJobs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPricingPlan` <a name="ResetPricingPlan" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetPricingPlan"></a>

```csharp
private void ResetPricingPlan()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservationPlanSettings` <a name="ResetReservationPlanSettings" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings"></a>

```csharp
private void ResetReservationPlanSettings()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaConvertQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MediaConvertQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MediaConvertQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MediaConvertQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MediaConvertQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaConvertQueue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaConvertQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaConvertQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaConvertQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings">ReservationPlanSettings</a></code> | <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.concurrentJobsInput">ConcurrentJobsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput">PricingPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput">ReservationPlanSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.concurrentJobs">ConcurrentJobs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ReservationPlanSettings`<sup>Required</sup> <a name="ReservationPlanSettings" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings"></a>

```csharp
public MediaConvertQueueReservationPlanSettingsOutputReference ReservationPlanSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a>

---

##### `ConcurrentJobsInput`<sup>Optional</sup> <a name="ConcurrentJobsInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.concurrentJobsInput"></a>

```csharp
public double ConcurrentJobsInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PricingPlanInput`<sup>Optional</sup> <a name="PricingPlanInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput"></a>

```csharp
public string PricingPlanInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservationPlanSettingsInput`<sup>Optional</sup> <a name="ReservationPlanSettingsInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput"></a>

```csharp
public MediaConvertQueueReservationPlanSettings ReservationPlanSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConcurrentJobs`<sup>Required</sup> <a name="ConcurrentJobs" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.concurrentJobs"></a>

```csharp
public double ConcurrentJobs { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaConvertQueueConfig <a name="MediaConvertQueueConfig" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaConvertQueueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    double ConcurrentJobs = null,
    string Description = null,
    string Id = null,
    string PricingPlan = null,
    string Region = null,
    MediaConvertQueueReservationPlanSettings ReservationPlanSettings = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#name MediaConvertQueue#name}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.concurrentJobs">ConcurrentJobs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#concurrent_jobs MediaConvertQueue#concurrent_jobs}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#description MediaConvertQueue#description}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#id MediaConvertQueue#id}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan">PricingPlan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings">ReservationPlanSettings</a></code> | <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | reservation_plan_settings block. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#status MediaConvertQueue#status}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#tags MediaConvertQueue#tags}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#tags_all MediaConvertQueue#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#name MediaConvertQueue#name}.

---

##### `ConcurrentJobs`<sup>Optional</sup> <a name="ConcurrentJobs" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.concurrentJobs"></a>

```csharp
public double ConcurrentJobs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#concurrent_jobs MediaConvertQueue#concurrent_jobs}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#description MediaConvertQueue#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#id MediaConvertQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PricingPlan`<sup>Optional</sup> <a name="PricingPlan" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan"></a>

```csharp
public string PricingPlan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#region MediaConvertQueue#region}

---

##### `ReservationPlanSettings`<sup>Optional</sup> <a name="ReservationPlanSettings" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings"></a>

```csharp
public MediaConvertQueueReservationPlanSettings ReservationPlanSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

reservation_plan_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#status MediaConvertQueue#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#tags MediaConvertQueue#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#tags_all MediaConvertQueue#tags_all}.

---

### MediaConvertQueueReservationPlanSettings <a name="MediaConvertQueueReservationPlanSettings" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaConvertQueueReservationPlanSettings {
    string Commitment,
    string RenewalType,
    double ReservedSlots
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment">Commitment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#commitment MediaConvertQueue#commitment}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType">RenewalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots">ReservedSlots</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}. |

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment"></a>

```csharp
public string Commitment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#commitment MediaConvertQueue#commitment}.

---

##### `RenewalType`<sup>Required</sup> <a name="RenewalType" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType"></a>

```csharp
public string RenewalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}.

---

##### `ReservedSlots`<sup>Required</sup> <a name="ReservedSlots" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots"></a>

```csharp
public double ReservedSlots { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaConvertQueueReservationPlanSettingsOutputReference <a name="MediaConvertQueueReservationPlanSettingsOutputReference" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaConvertQueueReservationPlanSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput">CommitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput">RenewalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput">ReservedSlotsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment">Commitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType">RenewalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots">ReservedSlots</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitmentInput`<sup>Optional</sup> <a name="CommitmentInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput"></a>

```csharp
public string CommitmentInput { get; }
```

- *Type:* string

---

##### `RenewalTypeInput`<sup>Optional</sup> <a name="RenewalTypeInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput"></a>

```csharp
public string RenewalTypeInput { get; }
```

- *Type:* string

---

##### `ReservedSlotsInput`<sup>Optional</sup> <a name="ReservedSlotsInput" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput"></a>

```csharp
public double ReservedSlotsInput { get; }
```

- *Type:* double

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment"></a>

```csharp
public string Commitment { get; }
```

- *Type:* string

---

##### `RenewalType`<sup>Required</sup> <a name="RenewalType" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType"></a>

```csharp
public string RenewalType { get; }
```

- *Type:* string

---

##### `ReservedSlots`<sup>Required</sup> <a name="ReservedSlots" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots"></a>

```csharp
public double ReservedSlots { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue"></a>

```csharp
public MediaConvertQueueReservationPlanSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---



