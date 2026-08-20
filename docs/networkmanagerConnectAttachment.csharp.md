# `networkmanagerConnectAttachment` Submodule <a name="`networkmanagerConnectAttachment` Submodule" id="@cdktn/provider-aws.networkmanagerConnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnectAttachment <a name="NetworkmanagerConnectAttachment" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment aws_networkmanager_connect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerConnectAttachment(Construct Scope, string Id, NetworkmanagerConnectAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig">NetworkmanagerConnectAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig">NetworkmanagerConnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetRoutingPolicyLabel">ResetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions"></a>

```csharp
private void PutOptions(NetworkmanagerConnectAttachmentOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkmanagerConnectAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRoutingPolicyLabel` <a name="ResetRoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetRoutingPolicyLabel"></a>

```csharp
private void ResetRoutingPolicyLabel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerConnectAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerConnectAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerConnectAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerConnectAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerConnectAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerConnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerConnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId">AttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options">Options</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference">NetworkmanagerConnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput">EdgeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabelInput">RoutingPolicyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput">TransportAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId">TransportAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId"></a>

```csharp
public string AttachmentId { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options"></a>

```csharp
public NetworkmanagerConnectAttachmentOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a>

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.timeouts"></a>

```csharp
public NetworkmanagerConnectAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference">NetworkmanagerConnectAttachmentTimeoutsOutputReference</a>

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput"></a>

```csharp
public string CoreNetworkIdInput { get; }
```

- *Type:* string

---

##### `EdgeLocationInput`<sup>Optional</sup> <a name="EdgeLocationInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput"></a>

```csharp
public string EdgeLocationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput"></a>

```csharp
public NetworkmanagerConnectAttachmentOptions OptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---

##### `RoutingPolicyLabelInput`<sup>Optional</sup> <a name="RoutingPolicyLabelInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabelInput"></a>

```csharp
public string RoutingPolicyLabelInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkmanagerConnectAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a>

---

##### `TransportAttachmentIdInput`<sup>Optional</sup> <a name="TransportAttachmentIdInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput"></a>

```csharp
public string TransportAttachmentIdInput { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation"></a>

```csharp
public string EdgeLocation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransportAttachmentId`<sup>Required</sup> <a name="TransportAttachmentId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId"></a>

```csharp
public string TransportAttachmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectAttachmentConfig <a name="NetworkmanagerConnectAttachmentConfig" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerConnectAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CoreNetworkId,
    string EdgeLocation,
    NetworkmanagerConnectAttachmentOptions Options,
    string TransportAttachmentId,
    string Id = null,
    string RoutingPolicyLabel = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    NetworkmanagerConnectAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation">EdgeLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId">TransportAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#id NetworkmanagerConnectAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#routing_policy_label NetworkmanagerConnectAttachment#routing_policy_label}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#tags_all NetworkmanagerConnectAttachment#tags_all}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}.

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation"></a>

```csharp
public string EdgeLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}.

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options"></a>

```csharp
public NetworkmanagerConnectAttachmentOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#options NetworkmanagerConnectAttachment#options}

---

##### `TransportAttachmentId`<sup>Required</sup> <a name="TransportAttachmentId" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId"></a>

```csharp
public string TransportAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#id NetworkmanagerConnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RoutingPolicyLabel`<sup>Optional</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#routing_policy_label NetworkmanagerConnectAttachment#routing_policy_label}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#tags_all NetworkmanagerConnectAttachment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.timeouts"></a>

```csharp
public NetworkmanagerConnectAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#timeouts NetworkmanagerConnectAttachment#timeouts}

---

### NetworkmanagerConnectAttachmentOptions <a name="NetworkmanagerConnectAttachmentOptions" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerConnectAttachmentOptions {
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}. |

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}.

---

### NetworkmanagerConnectAttachmentTimeouts <a name="NetworkmanagerConnectAttachmentTimeouts" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerConnectAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#create NetworkmanagerConnectAttachment#create}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#delete NetworkmanagerConnectAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#create NetworkmanagerConnectAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/networkmanager_connect_attachment#delete NetworkmanagerConnectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectAttachmentOptionsOutputReference <a name="NetworkmanagerConnectAttachmentOptionsOutputReference" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerConnectAttachmentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue"></a>

```csharp
public NetworkmanagerConnectAttachmentOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---


### NetworkmanagerConnectAttachmentTimeoutsOutputReference <a name="NetworkmanagerConnectAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerConnectAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerConnectAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTimeouts">NetworkmanagerConnectAttachmentTimeouts</a>

---



