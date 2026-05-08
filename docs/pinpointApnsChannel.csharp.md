# `pinpointApnsChannel` Submodule <a name="`pinpointApnsChannel` Submodule" id="@cdktn/provider-aws.pinpointApnsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsChannel <a name="PinpointApnsChannel" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel aws_pinpoint_apns_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointApnsChannel(Construct Scope, string Id, PinpointApnsChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig">PinpointApnsChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig">PinpointApnsChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetBundleId">ResetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetDefaultAuthenticationMethod">ResetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTeamId">ResetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTokenKey">ResetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTokenKeyId">ResetTokenKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBundleId` <a name="ResetBundleId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetBundleId"></a>

```csharp
private void ResetBundleId()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetDefaultAuthenticationMethod` <a name="ResetDefaultAuthenticationMethod" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetDefaultAuthenticationMethod"></a>

```csharp
private void ResetDefaultAuthenticationMethod()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTeamId` <a name="ResetTeamId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTeamId"></a>

```csharp
private void ResetTeamId()
```

##### `ResetTokenKey` <a name="ResetTokenKey" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTokenKey"></a>

```csharp
private void ResetTokenKey()
```

##### `ResetTokenKeyId` <a name="ResetTokenKeyId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.resetTokenKeyId"></a>

```csharp
private void ResetTokenKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PinpointApnsChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PinpointApnsChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PinpointApnsChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PinpointApnsChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

PinpointApnsChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PinpointApnsChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PinpointApnsChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PinpointApnsChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PinpointApnsChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.defaultAuthenticationMethodInput">DefaultAuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyIdInput">TokenKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyInput">TokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKey">TokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyId">TokenKeyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationMethodInput`<sup>Optional</sup> <a name="DefaultAuthenticationMethodInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.defaultAuthenticationMethodInput"></a>

```csharp
public string DefaultAuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `TokenKeyIdInput`<sup>Optional</sup> <a name="TokenKeyIdInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyIdInput"></a>

```csharp
public string TokenKeyIdInput { get; }
```

- *Type:* string

---

##### `TokenKeyInput`<sup>Optional</sup> <a name="TokenKeyInput" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyInput"></a>

```csharp
public string TokenKeyInput { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `DefaultAuthenticationMethod`<sup>Required</sup> <a name="DefaultAuthenticationMethod" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.defaultAuthenticationMethod"></a>

```csharp
public string DefaultAuthenticationMethod { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `TokenKey`<sup>Required</sup> <a name="TokenKey" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKey"></a>

```csharp
public string TokenKey { get; }
```

- *Type:* string

---

##### `TokenKeyId`<sup>Required</sup> <a name="TokenKeyId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tokenKeyId"></a>

```csharp
public string TokenKeyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsChannelConfig <a name="PinpointApnsChannelConfig" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new PinpointApnsChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string BundleId = null,
    string Certificate = null,
    string DefaultAuthenticationMethod = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    string PrivateKey = null,
    string Region = null,
    string TeamId = null,
    string TokenKey = null,
    string TokenKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#application_id PinpointApnsChannel#application_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.bundleId">BundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#bundle_id PinpointApnsChannel#bundle_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#certificate PinpointApnsChannel#certificate}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.defaultAuthenticationMethod">DefaultAuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#default_authentication_method PinpointApnsChannel#default_authentication_method}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#enabled PinpointApnsChannel#enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#id PinpointApnsChannel#id}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#private_key PinpointApnsChannel#private_key}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#team_id PinpointApnsChannel#team_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.tokenKey">TokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#token_key PinpointApnsChannel#token_key}. |
| <code><a href="#@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.tokenKeyId">TokenKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#token_key_id PinpointApnsChannel#token_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#application_id PinpointApnsChannel#application_id}.

---

##### `BundleId`<sup>Optional</sup> <a name="BundleId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#bundle_id PinpointApnsChannel#bundle_id}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#certificate PinpointApnsChannel#certificate}.

---

##### `DefaultAuthenticationMethod`<sup>Optional</sup> <a name="DefaultAuthenticationMethod" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.defaultAuthenticationMethod"></a>

```csharp
public string DefaultAuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#default_authentication_method PinpointApnsChannel#default_authentication_method}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#enabled PinpointApnsChannel#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#id PinpointApnsChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#private_key PinpointApnsChannel#private_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#region PinpointApnsChannel#region}

---

##### `TeamId`<sup>Optional</sup> <a name="TeamId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#team_id PinpointApnsChannel#team_id}.

---

##### `TokenKey`<sup>Optional</sup> <a name="TokenKey" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.tokenKey"></a>

```csharp
public string TokenKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#token_key PinpointApnsChannel#token_key}.

---

##### `TokenKeyId`<sup>Optional</sup> <a name="TokenKeyId" id="@cdktn/provider-aws.pinpointApnsChannel.PinpointApnsChannelConfig.property.tokenKeyId"></a>

```csharp
public string TokenKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel#token_key_id PinpointApnsChannel#token_key_id}.

---



