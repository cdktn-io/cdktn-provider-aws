# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktn/provider-aws.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktn/provider-aws.snsTopic.SnsTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic aws_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.snsTopic.SnsTopic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SnsTopic(Construct Scope, string Id, SnsTopicConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig">SnsTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.snsTopic.SnsTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig">SnsTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn">ResetApplicationFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn">ResetApplicationSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate">ResetApplicationSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetArchivePolicy">ResetArchivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication">ResetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy">ResetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetFifoThroughputScope">ResetFifoThroughputScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetFifoTopic">ResetFifoTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn">ResetFirehoseFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn">ResetFirehoseSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate">ResetFirehoseSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn">ResetHttpFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn">ResetHttpSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate">ResetHttpSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn">ResetLambdaFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn">ResetLambdaSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate">ResetLambdaSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetSignatureVersion">ResetSignatureVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn">ResetSqsFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn">ResetSqsSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate">ResetSqsSuccessFeedbackSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.resetTracingConfig">ResetTracingConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.snsTopic.SnsTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.snsTopic.SnsTopic.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.snsTopic.SnsTopic.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.snsTopic.SnsTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.snsTopic.SnsTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.snsTopic.SnsTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.snsTopic.SnsTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.snsTopic.SnsTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.snsTopic.SnsTopic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.snsTopic.SnsTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.snsTopic.SnsTopic.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.snsTopic.SnsTopic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.snsTopic.SnsTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.snsTopic.SnsTopic.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.snsTopic.SnsTopic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.snsTopic.SnsTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.snsTopic.SnsTopic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.snsTopic.SnsTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.snsTopic.SnsTopic.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.snsTopic.SnsTopic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.snsTopic.SnsTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApplicationFailureFeedbackRoleArn` <a name="ResetApplicationFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetApplicationFailureFeedbackRoleArn"></a>

```csharp
private void ResetApplicationFailureFeedbackRoleArn()
```

##### `ResetApplicationSuccessFeedbackRoleArn` <a name="ResetApplicationSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackRoleArn"></a>

```csharp
private void ResetApplicationSuccessFeedbackRoleArn()
```

##### `ResetApplicationSuccessFeedbackSampleRate` <a name="ResetApplicationSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetApplicationSuccessFeedbackSampleRate"></a>

```csharp
private void ResetApplicationSuccessFeedbackSampleRate()
```

##### `ResetArchivePolicy` <a name="ResetArchivePolicy" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetArchivePolicy"></a>

```csharp
private void ResetArchivePolicy()
```

##### `ResetContentBasedDeduplication` <a name="ResetContentBasedDeduplication" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```csharp
private void ResetContentBasedDeduplication()
```

##### `ResetDeliveryPolicy` <a name="ResetDeliveryPolicy" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetDeliveryPolicy"></a>

```csharp
private void ResetDeliveryPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFifoThroughputScope` <a name="ResetFifoThroughputScope" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetFifoThroughputScope"></a>

```csharp
private void ResetFifoThroughputScope()
```

##### `ResetFifoTopic` <a name="ResetFifoTopic" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetFifoTopic"></a>

```csharp
private void ResetFifoTopic()
```

##### `ResetFirehoseFailureFeedbackRoleArn` <a name="ResetFirehoseFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetFirehoseFailureFeedbackRoleArn"></a>

```csharp
private void ResetFirehoseFailureFeedbackRoleArn()
```

##### `ResetFirehoseSuccessFeedbackRoleArn` <a name="ResetFirehoseSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackRoleArn"></a>

```csharp
private void ResetFirehoseSuccessFeedbackRoleArn()
```

##### `ResetFirehoseSuccessFeedbackSampleRate` <a name="ResetFirehoseSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetFirehoseSuccessFeedbackSampleRate"></a>

```csharp
private void ResetFirehoseSuccessFeedbackSampleRate()
```

##### `ResetHttpFailureFeedbackRoleArn` <a name="ResetHttpFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetHttpFailureFeedbackRoleArn"></a>

```csharp
private void ResetHttpFailureFeedbackRoleArn()
```

##### `ResetHttpSuccessFeedbackRoleArn` <a name="ResetHttpSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackRoleArn"></a>

```csharp
private void ResetHttpSuccessFeedbackRoleArn()
```

##### `ResetHttpSuccessFeedbackSampleRate` <a name="ResetHttpSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetHttpSuccessFeedbackSampleRate"></a>

```csharp
private void ResetHttpSuccessFeedbackSampleRate()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```csharp
private void ResetKmsMasterKeyId()
```

##### `ResetLambdaFailureFeedbackRoleArn` <a name="ResetLambdaFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetLambdaFailureFeedbackRoleArn"></a>

```csharp
private void ResetLambdaFailureFeedbackRoleArn()
```

##### `ResetLambdaSuccessFeedbackRoleArn` <a name="ResetLambdaSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackRoleArn"></a>

```csharp
private void ResetLambdaSuccessFeedbackRoleArn()
```

##### `ResetLambdaSuccessFeedbackSampleRate` <a name="ResetLambdaSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetLambdaSuccessFeedbackSampleRate"></a>

```csharp
private void ResetLambdaSuccessFeedbackSampleRate()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSignatureVersion` <a name="ResetSignatureVersion" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetSignatureVersion"></a>

```csharp
private void ResetSignatureVersion()
```

##### `ResetSqsFailureFeedbackRoleArn` <a name="ResetSqsFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetSqsFailureFeedbackRoleArn"></a>

```csharp
private void ResetSqsFailureFeedbackRoleArn()
```

##### `ResetSqsSuccessFeedbackRoleArn` <a name="ResetSqsSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackRoleArn"></a>

```csharp
private void ResetSqsSuccessFeedbackRoleArn()
```

##### `ResetSqsSuccessFeedbackSampleRate` <a name="ResetSqsSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetSqsSuccessFeedbackSampleRate"></a>

```csharp
private void ResetSqsSuccessFeedbackSampleRate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTracingConfig` <a name="ResetTracingConfig" id="@cdktn/provider-aws.snsTopic.SnsTopic.resetTracingConfig"></a>

```csharp
private void ResetTracingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.snsTopic.SnsTopic.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SnsTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.snsTopic.SnsTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.snsTopic.SnsTopic.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SnsTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.snsTopic.SnsTopic.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SnsTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.snsTopic.SnsTopic.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SnsTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.snsTopic.SnsTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.snsTopic.SnsTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SnsTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.snsTopic.SnsTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SnsTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.snsTopic.SnsTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SnsTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.beginningArchiveTime">BeginningArchiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput">ApplicationFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput">ApplicationSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput">ApplicationSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.archivePolicyInput">ArchivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">ContentBasedDeduplicationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput">DeliveryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.fifoThroughputScopeInput">FifoThroughputScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput">FifoTopicInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput">FirehoseFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput">FirehoseSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput">FirehoseSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput">HttpFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput">HttpSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput">HttpSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput">LambdaFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput">LambdaSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput">LambdaSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput">SignatureVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput">SqsFailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput">SqsSuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput">SqsSuccessFeedbackSampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput">TracingConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn">ApplicationFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn">ApplicationSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate">ApplicationSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.archivePolicy">ArchivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.fifoThroughputScope">FifoThroughputScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.fifoTopic">FifoTopic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn">FirehoseFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn">FirehoseSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate">FirehoseSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn">HttpFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn">HttpSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate">HttpSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn">LambdaFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn">LambdaSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate">LambdaSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.signatureVersion">SignatureVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn">SqsFailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn">SqsSuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate">SqsSuccessFeedbackSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.tracingConfig">TracingConfig</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BeginningArchiveTime`<sup>Required</sup> <a name="BeginningArchiveTime" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.beginningArchiveTime"></a>

```csharp
public string BeginningArchiveTime { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ApplicationFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="ApplicationFailureFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArnInput"></a>

```csharp
public string ApplicationFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `ApplicationSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArnInput"></a>

```csharp
public string ApplicationSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `ApplicationSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackSampleRateInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRateInput"></a>

```csharp
public double ApplicationSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `ArchivePolicyInput`<sup>Optional</sup> <a name="ArchivePolicyInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.archivePolicyInput"></a>

```csharp
public string ArchivePolicyInput { get; }
```

- *Type:* string

---

##### `ContentBasedDeduplicationInput`<sup>Optional</sup> <a name="ContentBasedDeduplicationInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```csharp
public bool|IResolvable ContentBasedDeduplicationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeliveryPolicyInput`<sup>Optional</sup> <a name="DeliveryPolicyInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.deliveryPolicyInput"></a>

```csharp
public string DeliveryPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FifoThroughputScopeInput`<sup>Optional</sup> <a name="FifoThroughputScopeInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.fifoThroughputScopeInput"></a>

```csharp
public string FifoThroughputScopeInput { get; }
```

- *Type:* string

---

##### `FifoTopicInput`<sup>Optional</sup> <a name="FifoTopicInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```csharp
public bool|IResolvable FifoTopicInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FirehoseFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="FirehoseFailureFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArnInput"></a>

```csharp
public string FirehoseFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `FirehoseSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArnInput"></a>

```csharp
public string FirehoseSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `FirehoseSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackSampleRateInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRateInput"></a>

```csharp
public double FirehoseSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `HttpFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="HttpFailureFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArnInput"></a>

```csharp
public string HttpFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `HttpSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="HttpSuccessFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArnInput"></a>

```csharp
public string HttpSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `HttpSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="HttpSuccessFeedbackSampleRateInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRateInput"></a>

```csharp
public double HttpSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```csharp
public string KmsMasterKeyIdInput { get; }
```

- *Type:* string

---

##### `LambdaFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="LambdaFailureFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArnInput"></a>

```csharp
public string LambdaFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `LambdaSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="LambdaSuccessFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArnInput"></a>

```csharp
public string LambdaSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `LambdaSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="LambdaSuccessFeedbackSampleRateInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRateInput"></a>

```csharp
public double LambdaSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SignatureVersionInput`<sup>Optional</sup> <a name="SignatureVersionInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```csharp
public double SignatureVersionInput { get; }
```

- *Type:* double

---

##### `SqsFailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="SqsFailureFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArnInput"></a>

```csharp
public string SqsFailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `SqsSuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="SqsSuccessFeedbackRoleArnInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArnInput"></a>

```csharp
public string SqsSuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `SqsSuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="SqsSuccessFeedbackSampleRateInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRateInput"></a>

```csharp
public double SqsSuccessFeedbackSampleRateInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TracingConfigInput`<sup>Optional</sup> <a name="TracingConfigInput" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```csharp
public string TracingConfigInput { get; }
```

- *Type:* string

---

##### `ApplicationFailureFeedbackRoleArn`<sup>Required</sup> <a name="ApplicationFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationFailureFeedbackRoleArn"></a>

```csharp
public string ApplicationFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `ApplicationSuccessFeedbackRoleArn`<sup>Required</sup> <a name="ApplicationSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackRoleArn"></a>

```csharp
public string ApplicationSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `ApplicationSuccessFeedbackSampleRate`<sup>Required</sup> <a name="ApplicationSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.applicationSuccessFeedbackSampleRate"></a>

```csharp
public double ApplicationSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `ArchivePolicy`<sup>Required</sup> <a name="ArchivePolicy" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.archivePolicy"></a>

```csharp
public string ArchivePolicy { get; }
```

- *Type:* string

---

##### `ContentBasedDeduplication`<sup>Required</sup> <a name="ContentBasedDeduplication" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```csharp
public bool|IResolvable ContentBasedDeduplication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeliveryPolicy`<sup>Required</sup> <a name="DeliveryPolicy" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.deliveryPolicy"></a>

```csharp
public string DeliveryPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FifoThroughputScope`<sup>Required</sup> <a name="FifoThroughputScope" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.fifoThroughputScope"></a>

```csharp
public string FifoThroughputScope { get; }
```

- *Type:* string

---

##### `FifoTopic`<sup>Required</sup> <a name="FifoTopic" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.fifoTopic"></a>

```csharp
public bool|IResolvable FifoTopic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FirehoseFailureFeedbackRoleArn`<sup>Required</sup> <a name="FirehoseFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseFailureFeedbackRoleArn"></a>

```csharp
public string FirehoseFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `FirehoseSuccessFeedbackRoleArn`<sup>Required</sup> <a name="FirehoseSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackRoleArn"></a>

```csharp
public string FirehoseSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `FirehoseSuccessFeedbackSampleRate`<sup>Required</sup> <a name="FirehoseSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.firehoseSuccessFeedbackSampleRate"></a>

```csharp
public double FirehoseSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `HttpFailureFeedbackRoleArn`<sup>Required</sup> <a name="HttpFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.httpFailureFeedbackRoleArn"></a>

```csharp
public string HttpFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `HttpSuccessFeedbackRoleArn`<sup>Required</sup> <a name="HttpSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackRoleArn"></a>

```csharp
public string HttpSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `HttpSuccessFeedbackSampleRate`<sup>Required</sup> <a name="HttpSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.httpSuccessFeedbackSampleRate"></a>

```csharp
public double HttpSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; }
```

- *Type:* string

---

##### `LambdaFailureFeedbackRoleArn`<sup>Required</sup> <a name="LambdaFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaFailureFeedbackRoleArn"></a>

```csharp
public string LambdaFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `LambdaSuccessFeedbackRoleArn`<sup>Required</sup> <a name="LambdaSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackRoleArn"></a>

```csharp
public string LambdaSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `LambdaSuccessFeedbackSampleRate`<sup>Required</sup> <a name="LambdaSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.lambdaSuccessFeedbackSampleRate"></a>

```csharp
public double LambdaSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SignatureVersion`<sup>Required</sup> <a name="SignatureVersion" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.signatureVersion"></a>

```csharp
public double SignatureVersion { get; }
```

- *Type:* double

---

##### `SqsFailureFeedbackRoleArn`<sup>Required</sup> <a name="SqsFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsFailureFeedbackRoleArn"></a>

```csharp
public string SqsFailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `SqsSuccessFeedbackRoleArn`<sup>Required</sup> <a name="SqsSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackRoleArn"></a>

```csharp
public string SqsSuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `SqsSuccessFeedbackSampleRate`<sup>Required</sup> <a name="SqsSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.sqsSuccessFeedbackSampleRate"></a>

```csharp
public double SqsSuccessFeedbackSampleRate { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TracingConfig`<sup>Required</sup> <a name="TracingConfig" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.tracingConfig"></a>

```csharp
public string TracingConfig { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.snsTopic.SnsTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SnsTopicConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationFailureFeedbackRoleArn = null,
    string ApplicationSuccessFeedbackRoleArn = null,
    double ApplicationSuccessFeedbackSampleRate = null,
    string ArchivePolicy = null,
    bool|IResolvable ContentBasedDeduplication = null,
    string DeliveryPolicy = null,
    string DisplayName = null,
    string FifoThroughputScope = null,
    bool|IResolvable FifoTopic = null,
    string FirehoseFailureFeedbackRoleArn = null,
    string FirehoseSuccessFeedbackRoleArn = null,
    double FirehoseSuccessFeedbackSampleRate = null,
    string HttpFailureFeedbackRoleArn = null,
    string HttpSuccessFeedbackRoleArn = null,
    double HttpSuccessFeedbackSampleRate = null,
    string Id = null,
    string KmsMasterKeyId = null,
    string LambdaFailureFeedbackRoleArn = null,
    string LambdaSuccessFeedbackRoleArn = null,
    double LambdaSuccessFeedbackSampleRate = null,
    string Name = null,
    string NamePrefix = null,
    string Policy = null,
    string Region = null,
    double SignatureVersion = null,
    string SqsFailureFeedbackRoleArn = null,
    string SqsSuccessFeedbackRoleArn = null,
    double SqsSuccessFeedbackSampleRate = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TracingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn">ApplicationFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn">ApplicationSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate">ApplicationSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.archivePolicy">ArchivePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#delivery_policy SnsTopic#delivery_policy}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#display_name SnsTopic#display_name}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.fifoThroughputScope">FifoThroughputScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic">FifoTopic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn">FirehoseFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn">FirehoseSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate">FirehoseSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn">HttpFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn">HttpSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate">HttpSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#id SnsTopic#id}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn">LambdaFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn">LambdaSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate">LambdaSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#name SnsTopic#name}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#name_prefix SnsTopic#name_prefix}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#policy SnsTopic#policy}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion">SignatureVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#signature_version SnsTopic#signature_version}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn">SqsFailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn">SqsSuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate">SqsSuccessFeedbackSampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#tags SnsTopic#tags}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#tags_all SnsTopic#tags_all}. |
| <code><a href="#@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig">TracingConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationFailureFeedbackRoleArn`<sup>Optional</sup> <a name="ApplicationFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.applicationFailureFeedbackRoleArn"></a>

```csharp
public string ApplicationFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}.

---

##### `ApplicationSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackRoleArn"></a>

```csharp
public string ApplicationSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}.

---

##### `ApplicationSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="ApplicationSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.applicationSuccessFeedbackSampleRate"></a>

```csharp
public double ApplicationSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}.

---

##### `ArchivePolicy`<sup>Optional</sup> <a name="ArchivePolicy" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.archivePolicy"></a>

```csharp
public string ArchivePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}.

---

##### `ContentBasedDeduplication`<sup>Optional</sup> <a name="ContentBasedDeduplication" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```csharp
public bool|IResolvable ContentBasedDeduplication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}.

---

##### `DeliveryPolicy`<sup>Optional</sup> <a name="DeliveryPolicy" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.deliveryPolicy"></a>

```csharp
public string DeliveryPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#delivery_policy SnsTopic#delivery_policy}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#display_name SnsTopic#display_name}.

---

##### `FifoThroughputScope`<sup>Optional</sup> <a name="FifoThroughputScope" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.fifoThroughputScope"></a>

```csharp
public string FifoThroughputScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}.

---

##### `FifoTopic`<sup>Optional</sup> <a name="FifoTopic" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```csharp
public bool|IResolvable FifoTopic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}.

---

##### `FirehoseFailureFeedbackRoleArn`<sup>Optional</sup> <a name="FirehoseFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.firehoseFailureFeedbackRoleArn"></a>

```csharp
public string FirehoseFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}.

---

##### `FirehoseSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackRoleArn"></a>

```csharp
public string FirehoseSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}.

---

##### `FirehoseSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="FirehoseSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.firehoseSuccessFeedbackSampleRate"></a>

```csharp
public double FirehoseSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}.

---

##### `HttpFailureFeedbackRoleArn`<sup>Optional</sup> <a name="HttpFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.httpFailureFeedbackRoleArn"></a>

```csharp
public string HttpFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}.

---

##### `HttpSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="HttpSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackRoleArn"></a>

```csharp
public string HttpSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}.

---

##### `HttpSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="HttpSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.httpSuccessFeedbackSampleRate"></a>

```csharp
public double HttpSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#id SnsTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```csharp
public string KmsMasterKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}.

---

##### `LambdaFailureFeedbackRoleArn`<sup>Optional</sup> <a name="LambdaFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.lambdaFailureFeedbackRoleArn"></a>

```csharp
public string LambdaFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}.

---

##### `LambdaSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="LambdaSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackRoleArn"></a>

```csharp
public string LambdaSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}.

---

##### `LambdaSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="LambdaSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.lambdaSuccessFeedbackSampleRate"></a>

```csharp
public double LambdaSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#name SnsTopic#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#name_prefix SnsTopic#name_prefix}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#policy SnsTopic#policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#region SnsTopic#region}

---

##### `SignatureVersion`<sup>Optional</sup> <a name="SignatureVersion" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```csharp
public double SignatureVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#signature_version SnsTopic#signature_version}.

---

##### `SqsFailureFeedbackRoleArn`<sup>Optional</sup> <a name="SqsFailureFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.sqsFailureFeedbackRoleArn"></a>

```csharp
public string SqsFailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}.

---

##### `SqsSuccessFeedbackRoleArn`<sup>Optional</sup> <a name="SqsSuccessFeedbackRoleArn" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackRoleArn"></a>

```csharp
public string SqsSuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}.

---

##### `SqsSuccessFeedbackSampleRate`<sup>Optional</sup> <a name="SqsSuccessFeedbackSampleRate" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.sqsSuccessFeedbackSampleRate"></a>

```csharp
public double SqsSuccessFeedbackSampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#tags SnsTopic#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#tags_all SnsTopic#tags_all}.

---

##### `TracingConfig`<sup>Optional</sup> <a name="TracingConfig" id="@cdktn/provider-aws.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```csharp
public string TracingConfig { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}.

---



