# `ivsRecordingConfiguration` Submodule <a name="`ivsRecordingConfiguration` Submodule" id="@cdktn/provider-aws.ivsRecordingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsRecordingConfiguration <a name="IvsRecordingConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration aws_ivs_recording_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfiguration(Construct Scope, string Id, IvsRecordingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig">IvsRecordingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig">IvsRecordingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration">PutDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration">PutThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRecordingReconnectWindowSeconds">ResetRecordingReconnectWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetThumbnailConfiguration">ResetThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationConfiguration` <a name="PutDestinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration"></a>

```csharp
private void PutDestinationConfiguration(IvsRecordingConfigurationDestinationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

---

##### `PutThumbnailConfiguration` <a name="PutThumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration"></a>

```csharp
private void PutThumbnailConfiguration(IvsRecordingConfigurationThumbnailConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putThumbnailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(IvsRecordingConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRecordingReconnectWindowSeconds` <a name="ResetRecordingReconnectWindowSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRecordingReconnectWindowSeconds"></a>

```csharp
private void ResetRecordingReconnectWindowSeconds()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetThumbnailConfiguration` <a name="ResetThumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetThumbnailConfiguration"></a>

```csharp
private void ResetThumbnailConfiguration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IvsRecordingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IvsRecordingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IvsRecordingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IvsRecordingConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IvsRecordingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IvsRecordingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvsRecordingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvsRecordingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IvsRecordingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference">IvsRecordingConfigurationDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfiguration">ThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference">IvsRecordingConfigurationThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference">IvsRecordingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfigurationInput">DestinationConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSecondsInput">RecordingReconnectWindowSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfigurationInput">ThumbnailConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSeconds">RecordingReconnectWindowSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfiguration"></a>

```csharp
public IvsRecordingConfigurationDestinationConfigurationOutputReference DestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference">IvsRecordingConfigurationDestinationConfigurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ThumbnailConfiguration`<sup>Required</sup> <a name="ThumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfiguration"></a>

```csharp
public IvsRecordingConfigurationThumbnailConfigurationOutputReference ThumbnailConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference">IvsRecordingConfigurationThumbnailConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeouts"></a>

```csharp
public IvsRecordingConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference">IvsRecordingConfigurationTimeoutsOutputReference</a>

---

##### `DestinationConfigurationInput`<sup>Optional</sup> <a name="DestinationConfigurationInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.destinationConfigurationInput"></a>

```csharp
public IvsRecordingConfigurationDestinationConfiguration DestinationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecordingReconnectWindowSecondsInput`<sup>Optional</sup> <a name="RecordingReconnectWindowSecondsInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSecondsInput"></a>

```csharp
public double RecordingReconnectWindowSecondsInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThumbnailConfigurationInput`<sup>Optional</sup> <a name="ThumbnailConfigurationInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.thumbnailConfigurationInput"></a>

```csharp
public IvsRecordingConfigurationThumbnailConfiguration ThumbnailConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.timeoutsInput"></a>

```csharp
public IResolvable|IvsRecordingConfigurationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecordingReconnectWindowSeconds`<sup>Required</sup> <a name="RecordingReconnectWindowSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.recordingReconnectWindowSeconds"></a>

```csharp
public double RecordingReconnectWindowSeconds { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsRecordingConfigurationConfig <a name="IvsRecordingConfigurationConfig" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IvsRecordingConfigurationDestinationConfiguration DestinationConfiguration,
    string Id = null,
    string Name = null,
    double RecordingReconnectWindowSeconds = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    IvsRecordingConfigurationThumbnailConfiguration ThumbnailConfiguration = null,
    IvsRecordingConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | destination_configuration block. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#id IvsRecordingConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#name IvsRecordingConfiguration#name}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.recordingReconnectWindowSeconds">RecordingReconnectWindowSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.thumbnailConfiguration">ThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | thumbnail_configuration block. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.destinationConfiguration"></a>

```csharp
public IvsRecordingConfigurationDestinationConfiguration DestinationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

destination_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#destination_configuration IvsRecordingConfiguration#destination_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#id IvsRecordingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#name IvsRecordingConfiguration#name}.

---

##### `RecordingReconnectWindowSeconds`<sup>Optional</sup> <a name="RecordingReconnectWindowSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.recordingReconnectWindowSeconds"></a>

```csharp
public double RecordingReconnectWindowSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#recording_reconnect_window_seconds IvsRecordingConfiguration#recording_reconnect_window_seconds}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#region IvsRecordingConfiguration#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#tags IvsRecordingConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#tags_all IvsRecordingConfiguration#tags_all}.

---

##### `ThumbnailConfiguration`<sup>Optional</sup> <a name="ThumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.thumbnailConfiguration"></a>

```csharp
public IvsRecordingConfigurationThumbnailConfiguration ThumbnailConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

thumbnail_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#thumbnail_configuration IvsRecordingConfiguration#thumbnail_configuration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationConfig.property.timeouts"></a>

```csharp
public IvsRecordingConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#timeouts IvsRecordingConfiguration#timeouts}

---

### IvsRecordingConfigurationDestinationConfiguration <a name="IvsRecordingConfigurationDestinationConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationDestinationConfiguration {
    IvsRecordingConfigurationDestinationConfigurationS3 S3
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | s3 block. |

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration.property.s3"></a>

```csharp
public IvsRecordingConfigurationDestinationConfigurationS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#s3 IvsRecordingConfiguration#s3}

---

### IvsRecordingConfigurationDestinationConfigurationS3 <a name="IvsRecordingConfigurationDestinationConfigurationS3" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationDestinationConfigurationS3 {
    string BucketName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#bucket_name IvsRecordingConfiguration#bucket_name}.

---

### IvsRecordingConfigurationThumbnailConfiguration <a name="IvsRecordingConfigurationThumbnailConfiguration" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationThumbnailConfiguration {
    string RecordingMode = null,
    double TargetIntervalSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.recordingMode">RecordingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.targetIntervalSeconds">TargetIntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}. |

---

##### `RecordingMode`<sup>Optional</sup> <a name="RecordingMode" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.recordingMode"></a>

```csharp
public string RecordingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#recording_mode IvsRecordingConfiguration#recording_mode}.

---

##### `TargetIntervalSeconds`<sup>Optional</sup> <a name="TargetIntervalSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration.property.targetIntervalSeconds"></a>

```csharp
public double TargetIntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#target_interval_seconds IvsRecordingConfiguration#target_interval_seconds}.

---

### IvsRecordingConfigurationTimeouts <a name="IvsRecordingConfigurationTimeouts" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#create IvsRecordingConfiguration#create}. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#create IvsRecordingConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/ivs_recording_configuration#delete IvsRecordingConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvsRecordingConfigurationDestinationConfigurationOutputReference <a name="IvsRecordingConfigurationDestinationConfigurationOutputReference" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationDestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3">PutS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3"></a>

```csharp
private void PutS3(IvsRecordingConfigurationDestinationConfigurationS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference">IvsRecordingConfigurationDestinationConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3"></a>

```csharp
public IvsRecordingConfigurationDestinationConfigurationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference">IvsRecordingConfigurationDestinationConfigurationS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.s3Input"></a>

```csharp
public IvsRecordingConfigurationDestinationConfigurationS3 S3Input { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IvsRecordingConfigurationDestinationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfiguration">IvsRecordingConfigurationDestinationConfiguration</a>

---


### IvsRecordingConfigurationDestinationConfigurationS3OutputReference <a name="IvsRecordingConfigurationDestinationConfigurationS3OutputReference" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationDestinationConfigurationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3OutputReference.property.internalValue"></a>

```csharp
public IvsRecordingConfigurationDestinationConfigurationS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationDestinationConfigurationS3">IvsRecordingConfigurationDestinationConfigurationS3</a>

---


### IvsRecordingConfigurationThumbnailConfigurationOutputReference <a name="IvsRecordingConfigurationThumbnailConfigurationOutputReference" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationThumbnailConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetRecordingMode">ResetRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetTargetIntervalSeconds">ResetTargetIntervalSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecordingMode` <a name="ResetRecordingMode" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetRecordingMode"></a>

```csharp
private void ResetRecordingMode()
```

##### `ResetTargetIntervalSeconds` <a name="ResetTargetIntervalSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.resetTargetIntervalSeconds"></a>

```csharp
private void ResetTargetIntervalSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingModeInput">RecordingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput">TargetIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingMode">RecordingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSeconds">TargetIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecordingModeInput`<sup>Optional</sup> <a name="RecordingModeInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingModeInput"></a>

```csharp
public string RecordingModeInput { get; }
```

- *Type:* string

---

##### `TargetIntervalSecondsInput`<sup>Optional</sup> <a name="TargetIntervalSecondsInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSecondsInput"></a>

```csharp
public double TargetIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `RecordingMode`<sup>Required</sup> <a name="RecordingMode" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.recordingMode"></a>

```csharp
public string RecordingMode { get; }
```

- *Type:* string

---

##### `TargetIntervalSeconds`<sup>Required</sup> <a name="TargetIntervalSeconds" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.targetIntervalSeconds"></a>

```csharp
public double TargetIntervalSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue"></a>

```csharp
public IvsRecordingConfigurationThumbnailConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationThumbnailConfiguration">IvsRecordingConfigurationThumbnailConfiguration</a>

---


### IvsRecordingConfigurationTimeoutsOutputReference <a name="IvsRecordingConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IvsRecordingConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IvsRecordingConfigurationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ivsRecordingConfiguration.IvsRecordingConfigurationTimeouts">IvsRecordingConfigurationTimeouts</a>

---



