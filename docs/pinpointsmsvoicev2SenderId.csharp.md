# `pinpointsmsvoicev2SenderId` Submodule <a name="`pinpointsmsvoicev2SenderId` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2SenderId <a name="Pinpointsmsvoicev2SenderId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id aws_pinpointsmsvoicev2_sender_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2SenderId(Construct Scope, string Id, Pinpointsmsvoicev2SenderIdConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig">Pinpointsmsvoicev2SenderIdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig">Pinpointsmsvoicev2SenderIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetMessageTypes">ResetMessageTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts"></a>

```csharp
private void PutTimeouts(Pinpointsmsvoicev2SenderIdTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetMessageTypes` <a name="ResetMessageTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetMessageTypes"></a>

```csharp
private void ResetMessageTypes()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2SenderId resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2SenderId.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2SenderId.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2SenderId.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2SenderId.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Pinpointsmsvoicev2SenderId resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2SenderId to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2SenderId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2SenderId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.monthlyLeasingPrice">MonthlyLeasingPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registered">Registered</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registrationId">RegistrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference">Pinpointsmsvoicev2SenderIdTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCodeInput">IsoCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypesInput">MessageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderIdInput">SenderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCode">IsoCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypes">MessageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderId">SenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `MonthlyLeasingPrice`<sup>Required</sup> <a name="MonthlyLeasingPrice" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.monthlyLeasingPrice"></a>

```csharp
public string MonthlyLeasingPrice { get; }
```

- *Type:* string

---

##### `Registered`<sup>Required</sup> <a name="Registered" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registered"></a>

```csharp
public IResolvable Registered { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RegistrationId`<sup>Required</sup> <a name="RegistrationId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registrationId"></a>

```csharp
public string RegistrationId { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeouts"></a>

```csharp
public Pinpointsmsvoicev2SenderIdTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference">Pinpointsmsvoicev2SenderIdTimeoutsOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsoCountryCodeInput`<sup>Optional</sup> <a name="IsoCountryCodeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCodeInput"></a>

```csharp
public string IsoCountryCodeInput { get; }
```

- *Type:* string

---

##### `MessageTypesInput`<sup>Optional</sup> <a name="MessageTypesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypesInput"></a>

```csharp
public string[] MessageTypesInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SenderIdInput`<sup>Optional</sup> <a name="SenderIdInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderIdInput"></a>

```csharp
public string SenderIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeoutsInput"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2SenderIdTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsoCountryCode`<sup>Required</sup> <a name="IsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCode"></a>

```csharp
public string IsoCountryCode { get; }
```

- *Type:* string

---

##### `MessageTypes`<sup>Required</sup> <a name="MessageTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypes"></a>

```csharp
public string[] MessageTypes { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SenderId`<sup>Required</sup> <a name="SenderId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderId"></a>

```csharp
public string SenderId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2SenderIdConfig <a name="Pinpointsmsvoicev2SenderIdConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2SenderIdConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IsoCountryCode,
    string SenderId,
    bool|IResolvable DeletionProtectionEnabled = null,
    string[] MessageTypes = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    Pinpointsmsvoicev2SenderIdTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.isoCountryCode">IsoCountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#iso_country_code Pinpointsmsvoicev2SenderId#iso_country_code}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.senderId">SenderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#sender_id Pinpointsmsvoicev2SenderId#sender_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#deletion_protection_enabled Pinpointsmsvoicev2SenderId#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.messageTypes">MessageTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#message_types Pinpointsmsvoicev2SenderId#message_types}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#tags Pinpointsmsvoicev2SenderId#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IsoCountryCode`<sup>Required</sup> <a name="IsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.isoCountryCode"></a>

```csharp
public string IsoCountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#iso_country_code Pinpointsmsvoicev2SenderId#iso_country_code}.

---

##### `SenderId`<sup>Required</sup> <a name="SenderId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.senderId"></a>

```csharp
public string SenderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#sender_id Pinpointsmsvoicev2SenderId#sender_id}.

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#deletion_protection_enabled Pinpointsmsvoicev2SenderId#deletion_protection_enabled}.

---

##### `MessageTypes`<sup>Optional</sup> <a name="MessageTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.messageTypes"></a>

```csharp
public string[] MessageTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#message_types Pinpointsmsvoicev2SenderId#message_types}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#region Pinpointsmsvoicev2SenderId#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#tags Pinpointsmsvoicev2SenderId#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.timeouts"></a>

```csharp
public Pinpointsmsvoicev2SenderIdTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#timeouts Pinpointsmsvoicev2SenderId#timeouts}

---

### Pinpointsmsvoicev2SenderIdTimeouts <a name="Pinpointsmsvoicev2SenderIdTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2SenderIdTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#create Pinpointsmsvoicev2SenderId#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#delete Pinpointsmsvoicev2SenderId#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/pinpointsmsvoicev2_sender_id#update Pinpointsmsvoicev2SenderId#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2SenderIdTimeoutsOutputReference <a name="Pinpointsmsvoicev2SenderIdTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2SenderIdTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2SenderIdTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

---



