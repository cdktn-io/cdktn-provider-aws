# `mediaPackageChannel` Submodule <a name="`mediaPackageChannel` Submodule" id="@cdktn/provider-aws.mediaPackageChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaPackageChannel <a name="MediaPackageChannel" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel aws_media_package_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaPackageChannel(Construct Scope, string Id, MediaPackageChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig">MediaPackageChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig">MediaPackageChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaPackageChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MediaPackageChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MediaPackageChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MediaPackageChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MediaPackageChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaPackageChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaPackageChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaPackageChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaPackageChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.hlsIngest">HlsIngest</a></code> | <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList">MediaPackageChannelHlsIngestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HlsIngest`<sup>Required</sup> <a name="HlsIngest" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.hlsIngest"></a>

```csharp
public MediaPackageChannelHlsIngestList HlsIngest { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList">MediaPackageChannelHlsIngestList</a>

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaPackageChannelConfig <a name="MediaPackageChannelConfig" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaPackageChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelId,
    string Description = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.channelId">ChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#channel_id MediaPackageChannel#channel_id}. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#description MediaPackageChannel#description}. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#id MediaPackageChannel#id}. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#tags MediaPackageChannel#tags}. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#tags_all MediaPackageChannel#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#channel_id MediaPackageChannel#channel_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#description MediaPackageChannel#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#id MediaPackageChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#region MediaPackageChannel#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#tags MediaPackageChannel#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/media_package_channel#tags_all MediaPackageChannel#tags_all}.

---

### MediaPackageChannelHlsIngest <a name="MediaPackageChannelHlsIngest" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaPackageChannelHlsIngest {

};
```


### MediaPackageChannelHlsIngestIngestEndpoints <a name="MediaPackageChannelHlsIngestIngestEndpoints" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaPackageChannelHlsIngestIngestEndpoints {

};
```


## Classes <a name="Classes" id="Classes"></a>

### MediaPackageChannelHlsIngestIngestEndpointsList <a name="MediaPackageChannelHlsIngestIngestEndpointsList" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaPackageChannelHlsIngestIngestEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.get"></a>

```csharp
private MediaPackageChannelHlsIngestIngestEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MediaPackageChannelHlsIngestIngestEndpointsOutputReference <a name="MediaPackageChannelHlsIngestIngestEndpointsOutputReference" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaPackageChannelHlsIngestIngestEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints">MediaPackageChannelHlsIngestIngestEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsOutputReference.property.internalValue"></a>

```csharp
public MediaPackageChannelHlsIngestIngestEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpoints">MediaPackageChannelHlsIngestIngestEndpoints</a>

---


### MediaPackageChannelHlsIngestList <a name="MediaPackageChannelHlsIngestList" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaPackageChannelHlsIngestList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.get"></a>

```csharp
private MediaPackageChannelHlsIngestOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MediaPackageChannelHlsIngestOutputReference <a name="MediaPackageChannelHlsIngestOutputReference" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MediaPackageChannelHlsIngestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.ingestEndpoints">IngestEndpoints</a></code> | <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList">MediaPackageChannelHlsIngestIngestEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngest">MediaPackageChannelHlsIngest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngestEndpoints`<sup>Required</sup> <a name="IngestEndpoints" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.ingestEndpoints"></a>

```csharp
public MediaPackageChannelHlsIngestIngestEndpointsList IngestEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestIngestEndpointsList">MediaPackageChannelHlsIngestIngestEndpointsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngestOutputReference.property.internalValue"></a>

```csharp
public MediaPackageChannelHlsIngest InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mediaPackageChannel.MediaPackageChannelHlsIngest">MediaPackageChannelHlsIngest</a>

---



