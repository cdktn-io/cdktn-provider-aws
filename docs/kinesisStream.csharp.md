# `kinesisStream` Submodule <a name="`kinesisStream` Submodule" id="@cdktn/provider-aws.kinesisStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisStream <a name="KinesisStream" id="@cdktn/provider-aws.kinesisStream.KinesisStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream aws_kinesis_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisStream.KinesisStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisStream(Construct Scope, string Id, KinesisStreamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig">KinesisStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.kinesisStream.KinesisStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig">KinesisStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails">PutStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetEnforceConsumerDeletion">ResetEnforceConsumerDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetMaxRecordSizeInKib">ResetMaxRecordSizeInKib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetShardCount">ResetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetShardLevelMetrics">ResetShardLevelMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetStreamModeDetails">ResetStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.resetWarmThroughputMibPs">ResetWarmThroughputMibPs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kinesisStream.KinesisStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.kinesisStream.KinesisStream.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.kinesisStream.KinesisStream.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.kinesisStream.KinesisStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.kinesisStream.KinesisStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kinesisStream.KinesisStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.kinesisStream.KinesisStream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.kinesisStream.KinesisStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.kinesisStream.KinesisStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.kinesisStream.KinesisStream.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.kinesisStream.KinesisStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.kinesisStream.KinesisStream.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.kinesisStream.KinesisStream.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisStream.KinesisStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisStream.KinesisStream.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisStream.KinesisStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.kinesisStream.KinesisStream.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.kinesisStream.KinesisStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.kinesisStream.KinesisStream.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisStream.KinesisStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStreamModeDetails` <a name="PutStreamModeDetails" id="@cdktn/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails"></a>

```csharp
private void PutStreamModeDetails(KinesisStreamStreamModeDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kinesisStream.KinesisStream.putStreamModeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.kinesisStream.KinesisStream.putTimeouts"></a>

```csharp
private void PutTimeouts(KinesisStreamTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kinesisStream.KinesisStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetEnforceConsumerDeletion` <a name="ResetEnforceConsumerDeletion" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetEnforceConsumerDeletion"></a>

```csharp
private void ResetEnforceConsumerDeletion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMaxRecordSizeInKib` <a name="ResetMaxRecordSizeInKib" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetMaxRecordSizeInKib"></a>

```csharp
private void ResetMaxRecordSizeInKib()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetRetentionPeriod"></a>

```csharp
private void ResetRetentionPeriod()
```

##### `ResetShardCount` <a name="ResetShardCount" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetShardCount"></a>

```csharp
private void ResetShardCount()
```

##### `ResetShardLevelMetrics` <a name="ResetShardLevelMetrics" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetShardLevelMetrics"></a>

```csharp
private void ResetShardLevelMetrics()
```

##### `ResetStreamModeDetails` <a name="ResetStreamModeDetails" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetStreamModeDetails"></a>

```csharp
private void ResetStreamModeDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWarmThroughputMibPs` <a name="ResetWarmThroughputMibPs" id="@cdktn/provider-aws.kinesisStream.KinesisStream.resetWarmThroughputMibPs"></a>

```csharp
private void ResetWarmThroughputMibPs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.kinesisStream.KinesisStream.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KinesisStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kinesisStream.KinesisStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.kinesisStream.KinesisStream.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KinesisStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kinesisStream.KinesisStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.kinesisStream.KinesisStream.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KinesisStream.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kinesisStream.KinesisStream.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.kinesisStream.KinesisStream.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KinesisStream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KinesisStream resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.kinesisStream.KinesisStream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KinesisStream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KinesisStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisStream.KinesisStream.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KinesisStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.streamModeDetails">StreamModeDetails</a></code> | <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference">KinesisStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletionInput">EnforceConsumerDeletionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.maxRecordSizeInKibInput">MaxRecordSizeInKibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.shardCountInput">ShardCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetricsInput">ShardLevelMetricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.streamModeDetailsInput">StreamModeDetailsInput</a></code> | <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.warmThroughputMibPsInput">WarmThroughputMibPsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletion">EnforceConsumerDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.maxRecordSizeInKib">MaxRecordSizeInKib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.shardCount">ShardCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetrics">ShardLevelMetrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.warmThroughputMibPs">WarmThroughputMibPs</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `StreamModeDetails`<sup>Required</sup> <a name="StreamModeDetails" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.streamModeDetails"></a>

```csharp
public KinesisStreamStreamModeDetailsOutputReference StreamModeDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference">KinesisStreamStreamModeDetailsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.timeouts"></a>

```csharp
public KinesisStreamTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference">KinesisStreamTimeoutsOutputReference</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `EnforceConsumerDeletionInput`<sup>Optional</sup> <a name="EnforceConsumerDeletionInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletionInput"></a>

```csharp
public bool|IResolvable EnforceConsumerDeletionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MaxRecordSizeInKibInput`<sup>Optional</sup> <a name="MaxRecordSizeInKibInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.maxRecordSizeInKibInput"></a>

```csharp
public double MaxRecordSizeInKibInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.retentionPeriodInput"></a>

```csharp
public double RetentionPeriodInput { get; }
```

- *Type:* double

---

##### `ShardCountInput`<sup>Optional</sup> <a name="ShardCountInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.shardCountInput"></a>

```csharp
public double ShardCountInput { get; }
```

- *Type:* double

---

##### `ShardLevelMetricsInput`<sup>Optional</sup> <a name="ShardLevelMetricsInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetricsInput"></a>

```csharp
public string[] ShardLevelMetricsInput { get; }
```

- *Type:* string[]

---

##### `StreamModeDetailsInput`<sup>Optional</sup> <a name="StreamModeDetailsInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.streamModeDetailsInput"></a>

```csharp
public KinesisStreamStreamModeDetails StreamModeDetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.timeoutsInput"></a>

```csharp
public IResolvable|KinesisStreamTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>

---

##### `WarmThroughputMibPsInput`<sup>Optional</sup> <a name="WarmThroughputMibPsInput" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.warmThroughputMibPsInput"></a>

```csharp
public double WarmThroughputMibPsInput { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `EnforceConsumerDeletion`<sup>Required</sup> <a name="EnforceConsumerDeletion" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.enforceConsumerDeletion"></a>

```csharp
public bool|IResolvable EnforceConsumerDeletion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MaxRecordSizeInKib`<sup>Required</sup> <a name="MaxRecordSizeInKib" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.maxRecordSizeInKib"></a>

```csharp
public double MaxRecordSizeInKib { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; }
```

- *Type:* double

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.shardCount"></a>

```csharp
public double ShardCount { get; }
```

- *Type:* double

---

##### `ShardLevelMetrics`<sup>Required</sup> <a name="ShardLevelMetrics" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.shardLevelMetrics"></a>

```csharp
public string[] ShardLevelMetrics { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WarmThroughputMibPs`<sup>Required</sup> <a name="WarmThroughputMibPs" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.warmThroughputMibPs"></a>

```csharp
public double WarmThroughputMibPs { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.kinesisStream.KinesisStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisStreamConfig <a name="KinesisStreamConfig" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisStreamConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Arn = null,
    string EncryptionType = null,
    bool|IResolvable EnforceConsumerDeletion = null,
    string Id = null,
    string KmsKeyId = null,
    double MaxRecordSizeInKib = null,
    string Region = null,
    double RetentionPeriod = null,
    double ShardCount = null,
    string[] ShardLevelMetrics = null,
    KinesisStreamStreamModeDetails StreamModeDetails = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    KinesisStreamTimeouts Timeouts = null,
    double WarmThroughputMibPs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#name KinesisStream#name}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#arn KinesisStream#arn}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#encryption_type KinesisStream#encryption_type}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.enforceConsumerDeletion">EnforceConsumerDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#id KinesisStream#id}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#kms_key_id KinesisStream#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.maxRecordSizeInKib">MaxRecordSizeInKib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#max_record_size_in_kib KinesisStream#max_record_size_in_kib}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#retention_period KinesisStream#retention_period}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.shardCount">ShardCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#shard_count KinesisStream#shard_count}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.shardLevelMetrics">ShardLevelMetrics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.streamModeDetails">StreamModeDetails</a></code> | <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | stream_mode_details block. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#tags KinesisStream#tags}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#tags_all KinesisStream#tags_all}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.warmThroughputMibPs">WarmThroughputMibPs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#warm_throughput_mib_ps KinesisStream#warm_throughput_mib_ps}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#name KinesisStream#name}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#arn KinesisStream#arn}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#encryption_type KinesisStream#encryption_type}.

---

##### `EnforceConsumerDeletion`<sup>Optional</sup> <a name="EnforceConsumerDeletion" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.enforceConsumerDeletion"></a>

```csharp
public bool|IResolvable EnforceConsumerDeletion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#id KinesisStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#kms_key_id KinesisStream#kms_key_id}.

---

##### `MaxRecordSizeInKib`<sup>Optional</sup> <a name="MaxRecordSizeInKib" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.maxRecordSizeInKib"></a>

```csharp
public double MaxRecordSizeInKib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#max_record_size_in_kib KinesisStream#max_record_size_in_kib}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#region KinesisStream#region}

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.retentionPeriod"></a>

```csharp
public double RetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#retention_period KinesisStream#retention_period}.

---

##### `ShardCount`<sup>Optional</sup> <a name="ShardCount" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.shardCount"></a>

```csharp
public double ShardCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#shard_count KinesisStream#shard_count}.

---

##### `ShardLevelMetrics`<sup>Optional</sup> <a name="ShardLevelMetrics" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.shardLevelMetrics"></a>

```csharp
public string[] ShardLevelMetrics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}.

---

##### `StreamModeDetails`<sup>Optional</sup> <a name="StreamModeDetails" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.streamModeDetails"></a>

```csharp
public KinesisStreamStreamModeDetails StreamModeDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

stream_mode_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#stream_mode_details KinesisStream#stream_mode_details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#tags KinesisStream#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#tags_all KinesisStream#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.timeouts"></a>

```csharp
public KinesisStreamTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#timeouts KinesisStream#timeouts}

---

##### `WarmThroughputMibPs`<sup>Optional</sup> <a name="WarmThroughputMibPs" id="@cdktn/provider-aws.kinesisStream.KinesisStreamConfig.property.warmThroughputMibPs"></a>

```csharp
public double WarmThroughputMibPs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#warm_throughput_mib_ps KinesisStream#warm_throughput_mib_ps}.

---

### KinesisStreamStreamModeDetails <a name="KinesisStreamStreamModeDetails" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisStreamStreamModeDetails {
    string StreamMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode">StreamMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#stream_mode KinesisStream#stream_mode}. |

---

##### `StreamMode`<sup>Required</sup> <a name="StreamMode" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails.property.streamMode"></a>

```csharp
public string StreamMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#stream_mode KinesisStream#stream_mode}.

---

### KinesisStreamTimeouts <a name="KinesisStreamTimeouts" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisStreamTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#create KinesisStream#create}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#delete KinesisStream#delete}. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#update KinesisStream#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#create KinesisStream#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#delete KinesisStream#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/kinesis_stream#update KinesisStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisStreamStreamModeDetailsOutputReference <a name="KinesisStreamStreamModeDetailsOutputReference" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisStreamStreamModeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput">StreamModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode">StreamMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamModeInput`<sup>Optional</sup> <a name="StreamModeInput" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamModeInput"></a>

```csharp
public string StreamModeInput { get; }
```

- *Type:* string

---

##### `StreamMode`<sup>Required</sup> <a name="StreamMode" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.streamMode"></a>

```csharp
public string StreamMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetailsOutputReference.property.internalValue"></a>

```csharp
public KinesisStreamStreamModeDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamStreamModeDetails">KinesisStreamStreamModeDetails</a>

---


### KinesisStreamTimeoutsOutputReference <a name="KinesisStreamTimeoutsOutputReference" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisStreamTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.kinesisStream.KinesisStreamTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KinesisStreamTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.kinesisStream.KinesisStreamTimeouts">KinesisStreamTimeouts</a>

---



