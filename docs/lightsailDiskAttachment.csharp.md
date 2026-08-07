# `lightsailDiskAttachment` Submodule <a name="`lightsailDiskAttachment` Submodule" id="@cdktn/provider-aws.lightsailDiskAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDiskAttachment <a name="LightsailDiskAttachment" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment aws_lightsail_disk_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LightsailDiskAttachment(Construct Scope, string Id, LightsailDiskAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig">LightsailDiskAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig">LightsailDiskAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailDiskAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LightsailDiskAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LightsailDiskAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LightsailDiskAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LightsailDiskAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LightsailDiskAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailDiskAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailDiskAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDiskAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.diskNameInput">DiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.diskPathInput">DiskPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.diskName">DiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.diskPath">DiskPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiskNameInput`<sup>Optional</sup> <a name="DiskNameInput" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.diskNameInput"></a>

```csharp
public string DiskNameInput { get; }
```

- *Type:* string

---

##### `DiskPathInput`<sup>Optional</sup> <a name="DiskPathInput" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.diskPathInput"></a>

```csharp
public string DiskPathInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.diskName"></a>

```csharp
public string DiskName { get; }
```

- *Type:* string

---

##### `DiskPath`<sup>Required</sup> <a name="DiskPath" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.diskPath"></a>

```csharp
public string DiskPath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDiskAttachmentConfig <a name="LightsailDiskAttachmentConfig" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LightsailDiskAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DiskName,
    string DiskPath,
    string InstanceName,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.diskName">DiskName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#disk_name LightsailDiskAttachment#disk_name}. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.diskPath">DiskPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#disk_path LightsailDiskAttachment#disk_path}. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#instance_name LightsailDiskAttachment#instance_name}. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#id LightsailDiskAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.diskName"></a>

```csharp
public string DiskName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#disk_name LightsailDiskAttachment#disk_name}.

---

##### `DiskPath`<sup>Required</sup> <a name="DiskPath" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.diskPath"></a>

```csharp
public string DiskPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#disk_path LightsailDiskAttachment#disk_path}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#instance_name LightsailDiskAttachment#instance_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#id LightsailDiskAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lightsailDiskAttachment.LightsailDiskAttachmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/lightsail_disk_attachment#region LightsailDiskAttachment#region}

---



