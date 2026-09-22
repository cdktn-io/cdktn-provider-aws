# `mskChannel` Submodule <a name="`mskChannel` Submodule" id="@cdktn/provider-aws.mskChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskChannel <a name="MskChannel" id="@cdktn/provider-aws.mskChannel.MskChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel aws_msk_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannel(Construct Scope, string Id, MskChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig">MskChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.mskChannel.MskChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig">MskChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination">PutIcebergDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo">PutLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration">PutTopicConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetIcebergDestination">ResetIcebergDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetLoggingInfo">ResetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetS3Destination">ResetS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.resetTopicConfiguration">ResetTopicConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.mskChannel.MskChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.mskChannel.MskChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.mskChannel.MskChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.mskChannel.MskChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.mskChannel.MskChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.mskChannel.MskChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.mskChannel.MskChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mskChannel.MskChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.mskChannel.MskChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.mskChannel.MskChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mskChannel.MskChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(IResolvable|MskChannelEncryptionConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannel.putEncryptionConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>[]

---

##### `PutIcebergDestination` <a name="PutIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination"></a>

```csharp
private void PutIcebergDestination(IResolvable|MskChannelIcebergDestination[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannel.putIcebergDestination.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>[]

---

##### `PutLoggingInfo` <a name="PutLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo"></a>

```csharp
private void PutLoggingInfo(IResolvable|MskChannelLoggingInfo[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannel.putLoggingInfo.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>[]

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination"></a>

```csharp
private void PutS3Destination(IResolvable|MskChannelS3Destination[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannel.putS3Destination.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts"></a>

```csharp
private void PutTimeouts(MskChannelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---

##### `PutTopicConfiguration` <a name="PutTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration"></a>

```csharp
private void PutTopicConfiguration(IResolvable|MskChannelTopicConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannel.putTopicConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>[]

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetIcebergDestination` <a name="ResetIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.resetIcebergDestination"></a>

```csharp
private void ResetIcebergDestination()
```

##### `ResetLoggingInfo` <a name="ResetLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.resetLoggingInfo"></a>

```csharp
private void ResetLoggingInfo()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.mskChannel.MskChannel.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.resetS3Destination"></a>

```csharp
private void ResetS3Destination()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTopicConfiguration` <a name="ResetTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.resetTopicConfiguration"></a>

```csharp
private void ResetTopicConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.mskChannel.MskChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MskChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mskChannel.MskChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MskChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MskChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mskChannel.MskChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MskChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MskChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mskChannel.MskChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MskChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList">MskChannelEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestination">IcebergDestination</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList">MskChannelIcebergDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList">MskChannelLoggingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList">MskChannelS3DestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference">MskChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfiguration">TopicConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList">MskChannelTopicConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestinationInput">IcebergDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfoInput">LoggingInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.s3DestinationInput">S3DestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfigurationInput">TopicConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.mskChannel.MskChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.mskChannel.MskChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.mskChannel.MskChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.mskChannel.MskChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mskChannel.MskChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mskChannel.MskChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mskChannel.MskChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mskChannel.MskChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mskChannel.MskChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfiguration"></a>

```csharp
public MskChannelEncryptionConfigurationList EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList">MskChannelEncryptionConfigurationList</a>

---

##### `IcebergDestination`<sup>Required</sup> <a name="IcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestination"></a>

```csharp
public MskChannelIcebergDestinationList IcebergDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList">MskChannelIcebergDestinationList</a>

---

##### `LoggingInfo`<sup>Required</sup> <a name="LoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfo"></a>

```csharp
public MskChannelLoggingInfoList LoggingInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList">MskChannelLoggingInfoList</a>

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-aws.mskChannel.MskChannel.property.s3Destination"></a>

```csharp
public MskChannelS3DestinationList S3Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList">MskChannelS3DestinationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.mskChannel.MskChannel.property.timeouts"></a>

```csharp
public MskChannelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference">MskChannelTimeoutsOutputReference</a>

---

##### `TopicConfiguration`<sup>Required</sup> <a name="TopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfiguration"></a>

```csharp
public MskChannelTopicConfigurationList TopicConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList">MskChannelTopicConfigurationList</a>

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|MskChannelEncryptionConfiguration[] EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>[]

---

##### `IcebergDestinationInput`<sup>Optional</sup> <a name="IcebergDestinationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.icebergDestinationInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestination[] IcebergDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>[]

---

##### `LoggingInfoInput`<sup>Optional</sup> <a name="LoggingInfoInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.loggingInfoInput"></a>

```csharp
public IResolvable|MskChannelLoggingInfo[] LoggingInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.s3DestinationInput"></a>

```csharp
public IResolvable|MskChannelS3Destination[] S3DestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.timeoutsInput"></a>

```csharp
public IResolvable|MskChannelTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---

##### `TopicConfigurationInput`<sup>Optional</sup> <a name="TopicConfigurationInput" id="@cdktn/provider-aws.mskChannel.MskChannel.property.topicConfigurationInput"></a>

```csharp
public IResolvable|MskChannelTopicConfiguration[] TopicConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>[]

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.mskChannel.MskChannel.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.mskChannel.MskChannel.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.mskChannel.MskChannel.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.mskChannel.MskChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskChannelConfig <a name="MskChannelConfig" id="@cdktn/provider-aws.mskChannel.MskChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelName,
    string ClusterArn,
    IResolvable|MskChannelEncryptionConfiguration[] EncryptionConfiguration = null,
    IResolvable|MskChannelIcebergDestination[] IcebergDestination = null,
    IResolvable|MskChannelLoggingInfo[] LoggingInfo = null,
    string Region = null,
    IResolvable|MskChannelS3Destination[] S3Destination = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MskChannelTimeouts Timeouts = null,
    IResolvable|MskChannelTopicConfiguration[] TopicConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>[]</code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.icebergDestination">IcebergDestination</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>[]</code> | iceberg_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.loggingInfo">LoggingInfo</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>[]</code> | logging_info block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.s3Destination">S3Destination</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>[]</code> | s3_destination block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelConfig.property.topicConfiguration">TopicConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>[]</code> | topic_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#channel_name MskChannel#channel_name}.

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cluster_arn MskChannel#cluster_arn}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.encryptionConfiguration"></a>

```csharp
public IResolvable|MskChannelEncryptionConfiguration[] EncryptionConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>[]

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#encryption_configuration MskChannel#encryption_configuration}

---

##### `IcebergDestination`<sup>Optional</sup> <a name="IcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.icebergDestination"></a>

```csharp
public IResolvable|MskChannelIcebergDestination[] IcebergDestination { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>[]

iceberg_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#iceberg_destination MskChannel#iceberg_destination}

---

##### `LoggingInfo`<sup>Optional</sup> <a name="LoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.loggingInfo"></a>

```csharp
public IResolvable|MskChannelLoggingInfo[] LoggingInfo { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>[]

logging_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#logging_info MskChannel#logging_info}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#region MskChannel#region}

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.s3Destination"></a>

```csharp
public IResolvable|MskChannelS3Destination[] S3Destination { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>[]

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3_destination MskChannel#s3_destination}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#tags MskChannel#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.timeouts"></a>

```csharp
public MskChannelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#timeouts MskChannel#timeouts}

---

##### `TopicConfiguration`<sup>Optional</sup> <a name="TopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelConfig.property.topicConfiguration"></a>

```csharp
public IResolvable|MskChannelTopicConfiguration[] TopicConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>[]

topic_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_configuration MskChannel#topic_configuration}

---

### MskChannelEncryptionConfiguration <a name="MskChannelEncryptionConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelEncryptionConfiguration {
    string KmsKeyArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}. |

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#kms_key_arn MskChannel#kms_key_arn}.

---

### MskChannelIcebergDestination <a name="MskChannelIcebergDestination" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestination {
    bool|IResolvable AppendOnly,
    string ServiceExecutionRoleArn,
    IResolvable|MskChannelIcebergDestinationCatalog[] Catalog = null,
    string CompressionType = null,
    double DataFreshnessInSeconds = null,
    IResolvable|MskChannelIcebergDestinationDeadLetterQueueS3[] DeadLetterQueueS3 = null,
    IResolvable|MskChannelIcebergDestinationDestinationTable[] DestinationTable = null,
    IResolvable|MskChannelIcebergDestinationSchemaEvolution[] SchemaEvolution = null,
    IResolvable|MskChannelIcebergDestinationTableCreation[] TableCreation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.appendOnly">AppendOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.catalog">Catalog</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>[]</code> | catalog block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.compressionType">CompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>[]</code> | dead_letter_queue_s3 block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.destinationTable">DestinationTable</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>[]</code> | destination_table block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.schemaEvolution">SchemaEvolution</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>[]</code> | schema_evolution block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.tableCreation">TableCreation</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>[]</code> | table_creation block. |

---

##### `AppendOnly`<sup>Required</sup> <a name="AppendOnly" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.appendOnly"></a>

```csharp
public bool|IResolvable AppendOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#append_only MskChannel#append_only}.

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.catalog"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationCatalog[] Catalog { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>[]

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog MskChannel#catalog}

---

##### `CompressionType`<sup>Optional</sup> <a name="CompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}.

---

##### `DataFreshnessInSeconds`<sup>Optional</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.dataFreshnessInSeconds"></a>

```csharp
public double DataFreshnessInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}.

---

##### `DeadLetterQueueS3`<sup>Optional</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.deadLetterQueueS3"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDeadLetterQueueS3[] DeadLetterQueueS3 { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>[]

dead_letter_queue_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `DestinationTable`<sup>Optional</sup> <a name="DestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.destinationTable"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTable[] DestinationTable { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>[]

destination_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table MskChannel#destination_table}

---

##### `SchemaEvolution`<sup>Optional</sup> <a name="SchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.schemaEvolution"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationSchemaEvolution[] SchemaEvolution { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>[]

schema_evolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#schema_evolution MskChannel#schema_evolution}

---

##### `TableCreation`<sup>Optional</sup> <a name="TableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination.property.tableCreation"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationTableCreation[] TableCreation { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>[]

table_creation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#table_creation MskChannel#table_creation}

---

### MskChannelIcebergDestinationCatalog <a name="MskChannelIcebergDestinationCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationCatalog {
    string CatalogArn = null,
    string WarehouseLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.catalogArn">CatalogArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.warehouseLocation">WarehouseLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}. |

---

##### `CatalogArn`<sup>Optional</sup> <a name="CatalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.catalogArn"></a>

```csharp
public string CatalogArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#catalog_arn MskChannel#catalog_arn}.

---

##### `WarehouseLocation`<sup>Optional</sup> <a name="WarehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog.property.warehouseLocation"></a>

```csharp
public string WarehouseLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#warehouse_location MskChannel#warehouse_location}.

---

### MskChannelIcebergDestinationDeadLetterQueueS3 <a name="MskChannelIcebergDestinationDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDeadLetterQueueS3 {
    string BucketArn,
    string ErrorOutputPrefix = null,
    string ExpectedBucketOwner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.bucketArn">BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `ErrorOutputPrefix`<sup>Optional</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```csharp
public string ErrorOutputPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

### MskChannelIcebergDestinationDestinationTable <a name="MskChannelIcebergDestinationDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTable {
    string DestinationDatabaseName = null,
    string DestinationTableName = null,
    IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpec[] PartitionSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationDatabaseName">DestinationDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationTableName">DestinationTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.partitionSpec">PartitionSpec</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>[]</code> | partition_spec block. |

---

##### `DestinationDatabaseName`<sup>Optional</sup> <a name="DestinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationDatabaseName"></a>

```csharp
public string DestinationDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_database_name MskChannel#destination_database_name}.

---

##### `DestinationTableName`<sup>Optional</sup> <a name="DestinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.destinationTableName"></a>

```csharp
public string DestinationTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#destination_table_name MskChannel#destination_table_name}.

---

##### `PartitionSpec`<sup>Optional</sup> <a name="PartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable.property.partitionSpec"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpec[] PartitionSpec { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>[]

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_spec MskChannel#partition_spec}

---

### MskChannelIcebergDestinationDestinationTablePartitionSpec <a name="MskChannelIcebergDestinationDestinationTablePartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTablePartitionSpec {
    string PartitionStrategy,
    IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpecSource[] Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.partitionStrategy">PartitionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.source">Source</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>[]</code> | source block. |

---

##### `PartitionStrategy`<sup>Required</sup> <a name="PartitionStrategy" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.partitionStrategy"></a>

```csharp
public string PartitionStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#partition_strategy MskChannel#partition_strategy}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec.property.source"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpecSource[] Source { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source MskChannel#source}

---

### MskChannelIcebergDestinationDestinationTablePartitionSpecSource <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTablePartitionSpecSource {
    string SourceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}. |

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#source_name MskChannel#source_name}.

---

### MskChannelIcebergDestinationSchemaEvolution <a name="MskChannelIcebergDestinationSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationSchemaEvolution {
    bool|IResolvable EnableSchemaEvolution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.property.enableSchemaEvolution">EnableSchemaEvolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}. |

---

##### `EnableSchemaEvolution`<sup>Optional</sup> <a name="EnableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution.property.enableSchemaEvolution"></a>

```csharp
public bool|IResolvable EnableSchemaEvolution { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_schema_evolution MskChannel#enable_schema_evolution}.

---

### MskChannelIcebergDestinationTableCreation <a name="MskChannelIcebergDestinationTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationTableCreation {
    bool|IResolvable EnableTableCreation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.property.enableTableCreation">EnableTableCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}. |

---

##### `EnableTableCreation`<sup>Optional</sup> <a name="EnableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation.property.enableTableCreation"></a>

```csharp
public bool|IResolvable EnableTableCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enable_table_creation MskChannel#enable_table_creation}.

---

### MskChannelLoggingInfo <a name="MskChannelLoggingInfo" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfo {
    IResolvable|MskChannelLoggingInfoCloudwatchLogs[] CloudwatchLogs = null,
    IResolvable|MskChannelLoggingInfoFirehose[] Firehose = null,
    IResolvable|MskChannelLoggingInfoS3[] S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>[]</code> | cloudwatch_logs block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.firehose">Firehose</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>[]</code> | firehose block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.s3">S3</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>[]</code> | s3 block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.cloudwatchLogs"></a>

```csharp
public IResolvable|MskChannelLoggingInfoCloudwatchLogs[] CloudwatchLogs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>[]

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#cloudwatch_logs MskChannel#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.firehose"></a>

```csharp
public IResolvable|MskChannelLoggingInfoFirehose[] Firehose { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>[]

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#firehose MskChannel#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo.property.s3"></a>

```csharp
public IResolvable|MskChannelLoggingInfoS3[] S3 { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>[]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#s3 MskChannel#s3}

---

### MskChannelLoggingInfoCloudwatchLogs <a name="MskChannelLoggingInfoCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoCloudwatchLogs {
    bool|IResolvable Enabled,
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#log_group MskChannel#log_group}.

---

### MskChannelLoggingInfoFirehose <a name="MskChannelLoggingInfoFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoFirehose {
    bool|IResolvable Enabled,
    string DeliveryStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delivery_stream MskChannel#delivery_stream}.

---

### MskChannelLoggingInfoS3 <a name="MskChannelLoggingInfoS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoS3 {
    bool|IResolvable Enabled,
    string Bucket = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#enabled MskChannel#enabled}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket MskChannel#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#prefix MskChannel#prefix}.

---

### MskChannelS3Destination <a name="MskChannelS3Destination" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3Destination {
    string ServiceExecutionRoleArn,
    double DataFreshnessInSeconds = null,
    IResolvable|MskChannelS3DestinationDeadLetterQueueS3[] DeadLetterQueueS3 = null,
    IResolvable|MskChannelS3DestinationStorage[] Storage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>[]</code> | dead_letter_queue_s3 block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.storage">Storage</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>[]</code> | storage block. |

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#service_execution_role_arn MskChannel#service_execution_role_arn}.

---

##### `DataFreshnessInSeconds`<sup>Optional</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.dataFreshnessInSeconds"></a>

```csharp
public double DataFreshnessInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#data_freshness_in_seconds MskChannel#data_freshness_in_seconds}.

---

##### `DeadLetterQueueS3`<sup>Optional</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.deadLetterQueueS3"></a>

```csharp
public IResolvable|MskChannelS3DestinationDeadLetterQueueS3[] DeadLetterQueueS3 { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>[]

dead_letter_queue_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#dead_letter_queue_s3 MskChannel#dead_letter_queue_s3}

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3Destination.property.storage"></a>

```csharp
public IResolvable|MskChannelS3DestinationStorage[] Storage { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>[]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage MskChannel#storage}

---

### MskChannelS3DestinationDeadLetterQueueS3 <a name="MskChannelS3DestinationDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3DestinationDeadLetterQueueS3 {
    string BucketArn,
    string ErrorOutputPrefix = null,
    string ExpectedBucketOwner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.bucketArn">BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `ErrorOutputPrefix`<sup>Optional</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.errorOutputPrefix"></a>

```csharp
public string ErrorOutputPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#error_output_prefix MskChannel#error_output_prefix}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

### MskChannelS3DestinationStorage <a name="MskChannelS3DestinationStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3DestinationStorage {
    string BucketArn,
    string CompressionType,
    string StorageClass,
    string ExpectedBucketOwner = null,
    string OutputKeyTemplate = null,
    string OutputPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.bucketArn">BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.compressionType">CompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputKeyTemplate">OutputKeyTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputPrefix">OutputPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}. |

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#bucket_arn MskChannel#bucket_arn}.

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.compressionType"></a>

```csharp
public string CompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#compression_type MskChannel#compression_type}.

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#storage_class MskChannel#storage_class}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#expected_bucket_owner MskChannel#expected_bucket_owner}.

---

##### `OutputKeyTemplate`<sup>Optional</sup> <a name="OutputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputKeyTemplate"></a>

```csharp
public string OutputKeyTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_key_template MskChannel#output_key_template}.

---

##### `OutputPrefix`<sup>Optional</sup> <a name="OutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage.property.outputPrefix"></a>

```csharp
public string OutputPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#output_prefix MskChannel#output_prefix}.

---

### MskChannelTimeouts <a name="MskChannelTimeouts" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#create MskChannel#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#delete MskChannel#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#update MskChannel#update}

---

### MskChannelTopicConfiguration <a name="MskChannelTopicConfiguration" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfiguration {
    string TopicArn,
    IResolvable|MskChannelTopicConfigurationRecordConverter[] RecordConverter = null,
    IResolvable|MskChannelTopicConfigurationRecordSchema[] RecordSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordConverter">RecordConverter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>[]</code> | record_converter block. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordSchema">RecordSchema</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>[]</code> | record_schema block. |

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#topic_arn MskChannel#topic_arn}.

---

##### `RecordConverter`<sup>Optional</sup> <a name="RecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordConverter"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationRecordConverter[] RecordConverter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>[]

record_converter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_converter MskChannel#record_converter}

---

##### `RecordSchema`<sup>Optional</sup> <a name="RecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration.property.recordSchema"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationRecordSchema[] RecordSchema { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>[]

record_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#record_schema MskChannel#record_schema}

---

### MskChannelTopicConfigurationRecordConverter <a name="MskChannelTopicConfigurationRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfigurationRecordConverter {
    string ValueConverter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.property.valueConverter">ValueConverter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}. |

---

##### `ValueConverter`<sup>Required</sup> <a name="ValueConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter.property.valueConverter"></a>

```csharp
public string ValueConverter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#value_converter MskChannel#value_converter}.

---

### MskChannelTopicConfigurationRecordSchema <a name="MskChannelTopicConfigurationRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfigurationRecordSchema {
    string GsrArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.property.gsrArn">GsrArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}. |

---

##### `GsrArn`<sup>Required</sup> <a name="GsrArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema.property.gsrArn"></a>

```csharp
public string GsrArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/msk_channel#gsr_arn MskChannel#gsr_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskChannelEncryptionConfigurationList <a name="MskChannelEncryptionConfigurationList" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get"></a>

```csharp
private MskChannelEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelEncryptionConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>[]

---


### MskChannelEncryptionConfigurationOutputReference <a name="MskChannelEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelEncryptionConfiguration">MskChannelEncryptionConfiguration</a>

---


### MskChannelIcebergDestinationCatalogList <a name="MskChannelIcebergDestinationCatalogList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationCatalogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get"></a>

```csharp
private MskChannelIcebergDestinationCatalogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationCatalog[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>[]

---


### MskChannelIcebergDestinationCatalogOutputReference <a name="MskChannelIcebergDestinationCatalogOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetCatalogArn">ResetCatalogArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetWarehouseLocation">ResetWarehouseLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogArn` <a name="ResetCatalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetCatalogArn"></a>

```csharp
private void ResetCatalogArn()
```

##### `ResetWarehouseLocation` <a name="ResetWarehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.resetWarehouseLocation"></a>

```csharp
private void ResetWarehouseLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArnInput">CatalogArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocationInput">WarehouseLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArn">CatalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocation">WarehouseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogArnInput`<sup>Optional</sup> <a name="CatalogArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArnInput"></a>

```csharp
public string CatalogArnInput { get; }
```

- *Type:* string

---

##### `WarehouseLocationInput`<sup>Optional</sup> <a name="WarehouseLocationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocationInput"></a>

```csharp
public string WarehouseLocationInput { get; }
```

- *Type:* string

---

##### `CatalogArn`<sup>Required</sup> <a name="CatalogArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.catalogArn"></a>

```csharp
public string CatalogArn { get; }
```

- *Type:* string

---

##### `WarehouseLocation`<sup>Required</sup> <a name="WarehouseLocation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.warehouseLocation"></a>

```csharp
public string WarehouseLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationCatalog InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>

---


### MskChannelIcebergDestinationDeadLetterQueueS3List <a name="MskChannelIcebergDestinationDeadLetterQueueS3List" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDeadLetterQueueS3List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get"></a>

```csharp
private MskChannelIcebergDestinationDeadLetterQueueS3OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDeadLetterQueueS3[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>[]

---


### MskChannelIcebergDestinationDeadLetterQueueS3OutputReference <a name="MskChannelIcebergDestinationDeadLetterQueueS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDeadLetterQueueS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">ResetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorOutputPrefix` <a name="ResetErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```csharp
private void ResetErrorOutputPrefix()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">ErrorOutputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `ErrorOutputPrefixInput`<sup>Optional</sup> <a name="ErrorOutputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```csharp
public string ErrorOutputPrefixInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `ErrorOutputPrefix`<sup>Required</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```csharp
public string ErrorOutputPrefix { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDeadLetterQueueS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>

---


### MskChannelIcebergDestinationDestinationTableList <a name="MskChannelIcebergDestinationDestinationTableList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get"></a>

```csharp
private MskChannelIcebergDestinationDestinationTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTable[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>[]

---


### MskChannelIcebergDestinationDestinationTableOutputReference <a name="MskChannelIcebergDestinationDestinationTableOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec">PutPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationDatabaseName">ResetDestinationDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationTableName">ResetDestinationTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetPartitionSpec">ResetPartitionSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitionSpec` <a name="PutPartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec"></a>

```csharp
private void PutPartitionSpec(IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpec[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>[]

---

##### `ResetDestinationDatabaseName` <a name="ResetDestinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationDatabaseName"></a>

```csharp
private void ResetDestinationDatabaseName()
```

##### `ResetDestinationTableName` <a name="ResetDestinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetDestinationTableName"></a>

```csharp
private void ResetDestinationTableName()
```

##### `ResetPartitionSpec` <a name="ResetPartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.resetPartitionSpec"></a>

```csharp
private void ResetPartitionSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList">MskChannelIcebergDestinationDestinationTablePartitionSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseNameInput">DestinationDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableNameInput">DestinationTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpecInput">PartitionSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseName">DestinationDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableName">DestinationTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PartitionSpec`<sup>Required</sup> <a name="PartitionSpec" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpec"></a>

```csharp
public MskChannelIcebergDestinationDestinationTablePartitionSpecList PartitionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList">MskChannelIcebergDestinationDestinationTablePartitionSpecList</a>

---

##### `DestinationDatabaseNameInput`<sup>Optional</sup> <a name="DestinationDatabaseNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseNameInput"></a>

```csharp
public string DestinationDatabaseNameInput { get; }
```

- *Type:* string

---

##### `DestinationTableNameInput`<sup>Optional</sup> <a name="DestinationTableNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableNameInput"></a>

```csharp
public string DestinationTableNameInput { get; }
```

- *Type:* string

---

##### `PartitionSpecInput`<sup>Optional</sup> <a name="PartitionSpecInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.partitionSpecInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpec[] PartitionSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>[]

---

##### `DestinationDatabaseName`<sup>Required</sup> <a name="DestinationDatabaseName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationDatabaseName"></a>

```csharp
public string DestinationDatabaseName { get; }
```

- *Type:* string

---

##### `DestinationTableName`<sup>Required</sup> <a name="DestinationTableName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.destinationTableName"></a>

```csharp
public string DestinationTableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecList <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTablePartitionSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get"></a>

```csharp
private MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpec[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>[]

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource"></a>

```csharp
private void PutSource(IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpecSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.putSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>[]

---

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList">MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategyInput">PartitionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategy">PartitionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.source"></a>

```csharp
public MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList Source { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList">MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList</a>

---

##### `PartitionStrategyInput`<sup>Optional</sup> <a name="PartitionStrategyInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategyInput"></a>

```csharp
public string PartitionStrategyInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.sourceInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpecSource[] SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>[]

---

##### `PartitionStrategy`<sup>Required</sup> <a name="PartitionStrategy" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.partitionStrategy"></a>

```csharp
public string PartitionStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpec">MskChannelIcebergDestinationDestinationTablePartitionSpec</a>

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get"></a>

```csharp
private MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpecSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>[]

---


### MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference <a name="MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.resetSourceName"></a>

```csharp
private void ResetSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTablePartitionSpecSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTablePartitionSpecSource">MskChannelIcebergDestinationDestinationTablePartitionSpecSource</a>

---


### MskChannelIcebergDestinationList <a name="MskChannelIcebergDestinationList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get"></a>

```csharp
private MskChannelIcebergDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestination[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>[]

---


### MskChannelIcebergDestinationOutputReference <a name="MskChannelIcebergDestinationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog">PutCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3">PutDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable">PutDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution">PutSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation">PutTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCompressionType">ResetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDataFreshnessInSeconds">ResetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDeadLetterQueueS3">ResetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDestinationTable">ResetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetSchemaEvolution">ResetSchemaEvolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetTableCreation">ResetTableCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCatalog` <a name="PutCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog"></a>

```csharp
private void PutCatalog(IResolvable|MskChannelIcebergDestinationCatalog[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putCatalog.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>[]

---

##### `PutDeadLetterQueueS3` <a name="PutDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3"></a>

```csharp
private void PutDeadLetterQueueS3(IResolvable|MskChannelIcebergDestinationDeadLetterQueueS3[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>[]

---

##### `PutDestinationTable` <a name="PutDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable"></a>

```csharp
private void PutDestinationTable(IResolvable|MskChannelIcebergDestinationDestinationTable[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putDestinationTable.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>[]

---

##### `PutSchemaEvolution` <a name="PutSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution"></a>

```csharp
private void PutSchemaEvolution(IResolvable|MskChannelIcebergDestinationSchemaEvolution[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putSchemaEvolution.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>[]

---

##### `PutTableCreation` <a name="PutTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation"></a>

```csharp
private void PutTableCreation(IResolvable|MskChannelIcebergDestinationTableCreation[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.putTableCreation.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>[]

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetCompressionType` <a name="ResetCompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetCompressionType"></a>

```csharp
private void ResetCompressionType()
```

##### `ResetDataFreshnessInSeconds` <a name="ResetDataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDataFreshnessInSeconds"></a>

```csharp
private void ResetDataFreshnessInSeconds()
```

##### `ResetDeadLetterQueueS3` <a name="ResetDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDeadLetterQueueS3"></a>

```csharp
private void ResetDeadLetterQueueS3()
```

##### `ResetDestinationTable` <a name="ResetDestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetDestinationTable"></a>

```csharp
private void ResetDestinationTable()
```

##### `ResetSchemaEvolution` <a name="ResetSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetSchemaEvolution"></a>

```csharp
private void ResetSchemaEvolution()
```

##### `ResetTableCreation` <a name="ResetTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.resetTableCreation"></a>

```csharp
private void ResetTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList">MskChannelIcebergDestinationCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List">MskChannelIcebergDestinationDeadLetterQueueS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTable">DestinationTable</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList">MskChannelIcebergDestinationDestinationTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolution">SchemaEvolution</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList">MskChannelIcebergDestinationSchemaEvolutionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreation">TableCreation</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList">MskChannelIcebergDestinationTableCreationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnlyInput">AppendOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalogInput">CatalogInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSecondsInput">DataFreshnessInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3Input">DeadLetterQueueS3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolutionInput">SchemaEvolutionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreationInput">TableCreationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnly">AppendOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalog"></a>

```csharp
public MskChannelIcebergDestinationCatalogList Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalogList">MskChannelIcebergDestinationCatalogList</a>

---

##### `DeadLetterQueueS3`<sup>Required</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3"></a>

```csharp
public MskChannelIcebergDestinationDeadLetterQueueS3List DeadLetterQueueS3 { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3List">MskChannelIcebergDestinationDeadLetterQueueS3List</a>

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTable"></a>

```csharp
public MskChannelIcebergDestinationDestinationTableList DestinationTable { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTableList">MskChannelIcebergDestinationDestinationTableList</a>

---

##### `SchemaEvolution`<sup>Required</sup> <a name="SchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolution"></a>

```csharp
public MskChannelIcebergDestinationSchemaEvolutionList SchemaEvolution { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList">MskChannelIcebergDestinationSchemaEvolutionList</a>

---

##### `TableCreation`<sup>Required</sup> <a name="TableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreation"></a>

```csharp
public MskChannelIcebergDestinationTableCreationList TableCreation { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList">MskChannelIcebergDestinationTableCreationList</a>

---

##### `AppendOnlyInput`<sup>Optional</sup> <a name="AppendOnlyInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnlyInput"></a>

```csharp
public bool|IResolvable AppendOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.catalogInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationCatalog[] CatalogInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationCatalog">MskChannelIcebergDestinationCatalog</a>[]

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `DataFreshnessInSecondsInput`<sup>Optional</sup> <a name="DataFreshnessInSecondsInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSecondsInput"></a>

```csharp
public double DataFreshnessInSecondsInput { get; }
```

- *Type:* double

---

##### `DeadLetterQueueS3Input`<sup>Optional</sup> <a name="DeadLetterQueueS3Input" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.deadLetterQueueS3Input"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDeadLetterQueueS3[] DeadLetterQueueS3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDeadLetterQueueS3">MskChannelIcebergDestinationDeadLetterQueueS3</a>[]

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.destinationTableInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationDestinationTable[] DestinationTableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationDestinationTable">MskChannelIcebergDestinationDestinationTable</a>[]

---

##### `SchemaEvolutionInput`<sup>Optional</sup> <a name="SchemaEvolutionInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.schemaEvolutionInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationSchemaEvolution[] SchemaEvolutionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>[]

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArnInput"></a>

```csharp
public string ServiceExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `TableCreationInput`<sup>Optional</sup> <a name="TableCreationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.tableCreationInput"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationTableCreation[] TableCreationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>[]

---

##### `AppendOnly`<sup>Required</sup> <a name="AppendOnly" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.appendOnly"></a>

```csharp
public bool|IResolvable AppendOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `DataFreshnessInSeconds`<sup>Required</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.dataFreshnessInSeconds"></a>

```csharp
public double DataFreshnessInSeconds { get; }
```

- *Type:* double

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestination">MskChannelIcebergDestination</a>

---


### MskChannelIcebergDestinationSchemaEvolutionList <a name="MskChannelIcebergDestinationSchemaEvolutionList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationSchemaEvolutionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get"></a>

```csharp
private MskChannelIcebergDestinationSchemaEvolutionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationSchemaEvolution[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>[]

---


### MskChannelIcebergDestinationSchemaEvolutionOutputReference <a name="MskChannelIcebergDestinationSchemaEvolutionOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationSchemaEvolutionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resetEnableSchemaEvolution">ResetEnableSchemaEvolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSchemaEvolution` <a name="ResetEnableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.resetEnableSchemaEvolution"></a>

```csharp
private void ResetEnableSchemaEvolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput">EnableSchemaEvolutionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolution">EnableSchemaEvolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableSchemaEvolutionInput`<sup>Optional</sup> <a name="EnableSchemaEvolutionInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolutionInput"></a>

```csharp
public bool|IResolvable EnableSchemaEvolutionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableSchemaEvolution`<sup>Required</sup> <a name="EnableSchemaEvolution" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.enableSchemaEvolution"></a>

```csharp
public bool|IResolvable EnableSchemaEvolution { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolutionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationSchemaEvolution InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationSchemaEvolution">MskChannelIcebergDestinationSchemaEvolution</a>

---


### MskChannelIcebergDestinationTableCreationList <a name="MskChannelIcebergDestinationTableCreationList" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationTableCreationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get"></a>

```csharp
private MskChannelIcebergDestinationTableCreationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationTableCreation[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>[]

---


### MskChannelIcebergDestinationTableCreationOutputReference <a name="MskChannelIcebergDestinationTableCreationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelIcebergDestinationTableCreationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resetEnableTableCreation">ResetEnableTableCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableTableCreation` <a name="ResetEnableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.resetEnableTableCreation"></a>

```csharp
private void ResetEnableTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreationInput">EnableTableCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreation">EnableTableCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableTableCreationInput`<sup>Optional</sup> <a name="EnableTableCreationInput" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreationInput"></a>

```csharp
public bool|IResolvable EnableTableCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableTableCreation`<sup>Required</sup> <a name="EnableTableCreation" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.enableTableCreation"></a>

```csharp
public bool|IResolvable EnableTableCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelIcebergDestinationTableCreation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelIcebergDestinationTableCreation">MskChannelIcebergDestinationTableCreation</a>

---


### MskChannelLoggingInfoCloudwatchLogsList <a name="MskChannelLoggingInfoCloudwatchLogsList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoCloudwatchLogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get"></a>

```csharp
private MskChannelLoggingInfoCloudwatchLogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoCloudwatchLogs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>[]

---


### MskChannelLoggingInfoCloudwatchLogsOutputReference <a name="MskChannelLoggingInfoCloudwatchLogsOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>

---


### MskChannelLoggingInfoFirehoseList <a name="MskChannelLoggingInfoFirehoseList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoFirehoseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get"></a>

```csharp
private MskChannelLoggingInfoFirehoseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoFirehose[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>[]

---


### MskChannelLoggingInfoFirehoseOutputReference <a name="MskChannelLoggingInfoFirehoseOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoFirehose InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>

---


### MskChannelLoggingInfoList <a name="MskChannelLoggingInfoList" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get"></a>

```csharp
private MskChannelLoggingInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfo[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>[]

---


### MskChannelLoggingInfoOutputReference <a name="MskChannelLoggingInfoOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(IResolvable|MskChannelLoggingInfoCloudwatchLogs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>[]

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(IResolvable|MskChannelLoggingInfoFirehose[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putFirehose.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>[]

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3"></a>

```csharp
private void PutS3(IResolvable|MskChannelLoggingInfoS3[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.putS3.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>[]

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList">MskChannelLoggingInfoCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList">MskChannelLoggingInfoFirehoseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List">MskChannelLoggingInfoS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogs"></a>

```csharp
public MskChannelLoggingInfoCloudwatchLogsList CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogsList">MskChannelLoggingInfoCloudwatchLogsList</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehose"></a>

```csharp
public MskChannelLoggingInfoFirehoseList Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehoseList">MskChannelLoggingInfoFirehoseList</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3"></a>

```csharp
public MskChannelLoggingInfoS3List S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List">MskChannelLoggingInfoS3List</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|MskChannelLoggingInfoCloudwatchLogs[] CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoCloudwatchLogs">MskChannelLoggingInfoCloudwatchLogs</a>[]

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.firehoseInput"></a>

```csharp
public IResolvable|MskChannelLoggingInfoFirehose[] FirehoseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoFirehose">MskChannelLoggingInfoFirehose</a>[]

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.s3Input"></a>

```csharp
public IResolvable|MskChannelLoggingInfoS3[] S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfo">MskChannelLoggingInfo</a>

---


### MskChannelLoggingInfoS3List <a name="MskChannelLoggingInfoS3List" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoS3List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get"></a>

```csharp
private MskChannelLoggingInfoS3OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3List.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoS3[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>[]

---


### MskChannelLoggingInfoS3OutputReference <a name="MskChannelLoggingInfoS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelLoggingInfoS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelLoggingInfoS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelLoggingInfoS3">MskChannelLoggingInfoS3</a>

---


### MskChannelS3DestinationDeadLetterQueueS3List <a name="MskChannelS3DestinationDeadLetterQueueS3List" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3DestinationDeadLetterQueueS3List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get"></a>

```csharp
private MskChannelS3DestinationDeadLetterQueueS3OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3DestinationDeadLetterQueueS3[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>[]

---


### MskChannelS3DestinationDeadLetterQueueS3OutputReference <a name="MskChannelS3DestinationDeadLetterQueueS3OutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3DestinationDeadLetterQueueS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix">ResetErrorOutputPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorOutputPrefix` <a name="ResetErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetErrorOutputPrefix"></a>

```csharp
private void ResetErrorOutputPrefix()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput">ErrorOutputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix">ErrorOutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `ErrorOutputPrefixInput`<sup>Optional</sup> <a name="ErrorOutputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefixInput"></a>

```csharp
public string ErrorOutputPrefixInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `ErrorOutputPrefix`<sup>Required</sup> <a name="ErrorOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.errorOutputPrefix"></a>

```csharp
public string ErrorOutputPrefix { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3DestinationDeadLetterQueueS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>

---


### MskChannelS3DestinationList <a name="MskChannelS3DestinationList" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3DestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get"></a>

```csharp
private MskChannelS3DestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3Destination[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>[]

---


### MskChannelS3DestinationOutputReference <a name="MskChannelS3DestinationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3">PutDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDataFreshnessInSeconds">ResetDataFreshnessInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDeadLetterQueueS3">ResetDeadLetterQueueS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeadLetterQueueS3` <a name="PutDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3"></a>

```csharp
private void PutDeadLetterQueueS3(IResolvable|MskChannelS3DestinationDeadLetterQueueS3[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putDeadLetterQueueS3.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>[]

---

##### `PutStorage` <a name="PutStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage"></a>

```csharp
private void PutStorage(IResolvable|MskChannelS3DestinationStorage[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.putStorage.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>[]

---

##### `ResetDataFreshnessInSeconds` <a name="ResetDataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDataFreshnessInSeconds"></a>

```csharp
private void ResetDataFreshnessInSeconds()
```

##### `ResetDeadLetterQueueS3` <a name="ResetDeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetDeadLetterQueueS3"></a>

```csharp
private void ResetDeadLetterQueueS3()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.resetStorage"></a>

```csharp
private void ResetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3">DeadLetterQueueS3</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List">MskChannelS3DestinationDeadLetterQueueS3List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList">MskChannelS3DestinationStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSecondsInput">DataFreshnessInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3Input">DeadLetterQueueS3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storageInput">StorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSeconds">DataFreshnessInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeadLetterQueueS3`<sup>Required</sup> <a name="DeadLetterQueueS3" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3"></a>

```csharp
public MskChannelS3DestinationDeadLetterQueueS3List DeadLetterQueueS3 { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3List">MskChannelS3DestinationDeadLetterQueueS3List</a>

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storage"></a>

```csharp
public MskChannelS3DestinationStorageList Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList">MskChannelS3DestinationStorageList</a>

---

##### `DataFreshnessInSecondsInput`<sup>Optional</sup> <a name="DataFreshnessInSecondsInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSecondsInput"></a>

```csharp
public double DataFreshnessInSecondsInput { get; }
```

- *Type:* double

---

##### `DeadLetterQueueS3Input`<sup>Optional</sup> <a name="DeadLetterQueueS3Input" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.deadLetterQueueS3Input"></a>

```csharp
public IResolvable|MskChannelS3DestinationDeadLetterQueueS3[] DeadLetterQueueS3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationDeadLetterQueueS3">MskChannelS3DestinationDeadLetterQueueS3</a>[]

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArnInput"></a>

```csharp
public string ServiceExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.storageInput"></a>

```csharp
public IResolvable|MskChannelS3DestinationStorage[] StorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>[]

---

##### `DataFreshnessInSeconds`<sup>Required</sup> <a name="DataFreshnessInSeconds" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.dataFreshnessInSeconds"></a>

```csharp
public double DataFreshnessInSeconds { get; }
```

- *Type:* double

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3Destination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3Destination">MskChannelS3Destination</a>

---


### MskChannelS3DestinationStorageList <a name="MskChannelS3DestinationStorageList" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3DestinationStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get"></a>

```csharp
private MskChannelS3DestinationStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3DestinationStorage[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>[]

---


### MskChannelS3DestinationStorageOutputReference <a name="MskChannelS3DestinationStorageOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelS3DestinationStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputKeyTemplate">ResetOutputKeyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputPrefix">ResetOutputPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetOutputKeyTemplate` <a name="ResetOutputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputKeyTemplate"></a>

```csharp
private void ResetOutputKeyTemplate()
```

##### `ResetOutputPrefix` <a name="ResetOutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.resetOutputPrefix"></a>

```csharp
private void ResetOutputPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionTypeInput">CompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplateInput">OutputKeyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefixInput">OutputPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionType">CompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplate">OutputKeyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefix">OutputPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `CompressionTypeInput`<sup>Optional</sup> <a name="CompressionTypeInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionTypeInput"></a>

```csharp
public string CompressionTypeInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `OutputKeyTemplateInput`<sup>Optional</sup> <a name="OutputKeyTemplateInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplateInput"></a>

```csharp
public string OutputKeyTemplateInput { get; }
```

- *Type:* string

---

##### `OutputPrefixInput`<sup>Optional</sup> <a name="OutputPrefixInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefixInput"></a>

```csharp
public string OutputPrefixInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.compressionType"></a>

```csharp
public string CompressionType { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `OutputKeyTemplate`<sup>Required</sup> <a name="OutputKeyTemplate" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputKeyTemplate"></a>

```csharp
public string OutputKeyTemplate { get; }
```

- *Type:* string

---

##### `OutputPrefix`<sup>Required</sup> <a name="OutputPrefix" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.outputPrefix"></a>

```csharp
public string OutputPrefix { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelS3DestinationStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelS3DestinationStorage">MskChannelS3DestinationStorage</a>

---


### MskChannelTimeoutsOutputReference <a name="MskChannelTimeoutsOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTimeouts">MskChannelTimeouts</a>

---


### MskChannelTopicConfigurationList <a name="MskChannelTopicConfigurationList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get"></a>

```csharp
private MskChannelTopicConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>[]

---


### MskChannelTopicConfigurationOutputReference <a name="MskChannelTopicConfigurationOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter">PutRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema">PutRecordSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordConverter">ResetRecordConverter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordSchema">ResetRecordSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordConverter` <a name="PutRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter"></a>

```csharp
private void PutRecordConverter(IResolvable|MskChannelTopicConfigurationRecordConverter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordConverter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>[]

---

##### `PutRecordSchema` <a name="PutRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema"></a>

```csharp
private void PutRecordSchema(IResolvable|MskChannelTopicConfigurationRecordSchema[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.putRecordSchema.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>[]

---

##### `ResetRecordConverter` <a name="ResetRecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordConverter"></a>

```csharp
private void ResetRecordConverter()
```

##### `ResetRecordSchema` <a name="ResetRecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.resetRecordSchema"></a>

```csharp
private void ResetRecordSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverter">RecordConverter</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList">MskChannelTopicConfigurationRecordConverterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchema">RecordSchema</a></code> | <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList">MskChannelTopicConfigurationRecordSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverterInput">RecordConverterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchemaInput">RecordSchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordConverter`<sup>Required</sup> <a name="RecordConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverter"></a>

```csharp
public MskChannelTopicConfigurationRecordConverterList RecordConverter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList">MskChannelTopicConfigurationRecordConverterList</a>

---

##### `RecordSchema`<sup>Required</sup> <a name="RecordSchema" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchema"></a>

```csharp
public MskChannelTopicConfigurationRecordSchemaList RecordSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList">MskChannelTopicConfigurationRecordSchemaList</a>

---

##### `RecordConverterInput`<sup>Optional</sup> <a name="RecordConverterInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordConverterInput"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationRecordConverter[] RecordConverterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>[]

---

##### `RecordSchemaInput`<sup>Optional</sup> <a name="RecordSchemaInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.recordSchemaInput"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationRecordSchema[] RecordSchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>[]

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfiguration">MskChannelTopicConfiguration</a>

---


### MskChannelTopicConfigurationRecordConverterList <a name="MskChannelTopicConfigurationRecordConverterList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfigurationRecordConverterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get"></a>

```csharp
private MskChannelTopicConfigurationRecordConverterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationRecordConverter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>[]

---


### MskChannelTopicConfigurationRecordConverterOutputReference <a name="MskChannelTopicConfigurationRecordConverterOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfigurationRecordConverterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverterInput">ValueConverterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverter">ValueConverter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueConverterInput`<sup>Optional</sup> <a name="ValueConverterInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverterInput"></a>

```csharp
public string ValueConverterInput { get; }
```

- *Type:* string

---

##### `ValueConverter`<sup>Required</sup> <a name="ValueConverter" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.valueConverter"></a>

```csharp
public string ValueConverter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationRecordConverter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordConverter">MskChannelTopicConfigurationRecordConverter</a>

---


### MskChannelTopicConfigurationRecordSchemaList <a name="MskChannelTopicConfigurationRecordSchemaList" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfigurationRecordSchemaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get"></a>

```csharp
private MskChannelTopicConfigurationRecordSchemaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaList.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationRecordSchema[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>[]

---


### MskChannelTopicConfigurationRecordSchemaOutputReference <a name="MskChannelTopicConfigurationRecordSchemaOutputReference" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MskChannelTopicConfigurationRecordSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArnInput">GsrArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArn">GsrArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GsrArnInput`<sup>Optional</sup> <a name="GsrArnInput" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArnInput"></a>

```csharp
public string GsrArnInput { get; }
```

- *Type:* string

---

##### `GsrArn`<sup>Required</sup> <a name="GsrArn" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.gsrArn"></a>

```csharp
public string GsrArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskChannelTopicConfigurationRecordSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mskChannel.MskChannelTopicConfigurationRecordSchema">MskChannelTopicConfigurationRecordSchema</a>

---



