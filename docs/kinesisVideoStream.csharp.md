# `kinesisVideoStream` Submodule <a name="`kinesisVideoStream` Submodule" id="@cdktn/provider-aws.kinesisVideoStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisVideoStream <a name="KinesisVideoStream" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream aws_kinesis_video_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisVideoStream(Construct Scope, string Id, KinesisVideoStreamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig">KinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig">KinesisVideoStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetDataRetentionInHours">ResetDataRetentionInHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetMediaType">ResetMediaType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.putTimeouts"></a>

```csharp
private void PutTimeouts(KinesisVideoStreamTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a>

---

##### `ResetDataRetentionInHours` <a name="ResetDataRetentionInHours" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetDataRetentionInHours"></a>

```csharp
private void ResetDataRetentionInHours()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMediaType` <a name="ResetMediaType" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetMediaType"></a>

```csharp
private void ResetMediaType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisVideoStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KinesisVideoStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KinesisVideoStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KinesisVideoStream.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

KinesisVideoStream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KinesisVideoStream resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KinesisVideoStream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KinesisVideoStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KinesisVideoStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference">KinesisVideoStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dataRetentionInHoursInput">DataRetentionInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.mediaTypeInput">MediaTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dataRetentionInHours">DataRetentionInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.mediaType">MediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.timeouts"></a>

```csharp
public KinesisVideoStreamTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference">KinesisVideoStreamTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `DataRetentionInHoursInput`<sup>Optional</sup> <a name="DataRetentionInHoursInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dataRetentionInHoursInput"></a>

```csharp
public double DataRetentionInHoursInput { get; }
```

- *Type:* double

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MediaTypeInput`<sup>Optional</sup> <a name="MediaTypeInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.mediaTypeInput"></a>

```csharp
public string MediaTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.timeoutsInput"></a>

```csharp
public IResolvable|KinesisVideoStreamTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a>

---

##### `DataRetentionInHours`<sup>Required</sup> <a name="DataRetentionInHours" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.dataRetentionInHours"></a>

```csharp
public double DataRetentionInHours { get; }
```

- *Type:* double

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MediaType`<sup>Required</sup> <a name="MediaType" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.mediaType"></a>

```csharp
public string MediaType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisVideoStreamConfig <a name="KinesisVideoStreamConfig" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisVideoStreamConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    double DataRetentionInHours = null,
    string DeviceName = null,
    string Id = null,
    string KmsKeyId = null,
    string MediaType = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    KinesisVideoStreamTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#name KinesisVideoStream#name}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.dataRetentionInHours">DataRetentionInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#device_name KinesisVideoStream#device_name}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#id KinesisVideoStream#id}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#kms_key_id KinesisVideoStream#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.mediaType">MediaType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#media_type KinesisVideoStream#media_type}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#tags KinesisVideoStream#tags}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#tags_all KinesisVideoStream#tags_all}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#name KinesisVideoStream#name}.

---

##### `DataRetentionInHours`<sup>Optional</sup> <a name="DataRetentionInHours" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.dataRetentionInHours"></a>

```csharp
public double DataRetentionInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}.

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#device_name KinesisVideoStream#device_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#id KinesisVideoStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#kms_key_id KinesisVideoStream#kms_key_id}.

---

##### `MediaType`<sup>Optional</sup> <a name="MediaType" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.mediaType"></a>

```csharp
public string MediaType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#media_type KinesisVideoStream#media_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#region KinesisVideoStream#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#tags KinesisVideoStream#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#tags_all KinesisVideoStream#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamConfig.property.timeouts"></a>

```csharp
public KinesisVideoStreamTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#timeouts KinesisVideoStream#timeouts}

---

### KinesisVideoStreamTimeouts <a name="KinesisVideoStreamTimeouts" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisVideoStreamTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#create KinesisVideoStream#create}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#delete KinesisVideoStream#delete}. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#update KinesisVideoStream#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#create KinesisVideoStream#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#delete KinesisVideoStream#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/kinesis_video_stream#update KinesisVideoStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisVideoStreamTimeoutsOutputReference <a name="KinesisVideoStreamTimeoutsOutputReference" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new KinesisVideoStreamTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KinesisVideoStreamTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.kinesisVideoStream.KinesisVideoStreamTimeouts">KinesisVideoStreamTimeouts</a>

---



