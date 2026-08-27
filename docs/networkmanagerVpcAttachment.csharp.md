# `networkmanagerVpcAttachment` Submodule <a name="`networkmanagerVpcAttachment` Submodule" id="@cdktn/provider-aws.networkmanagerVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerVpcAttachment <a name="NetworkmanagerVpcAttachment" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment aws_networkmanager_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerVpcAttachment(Construct Scope, string Id, NetworkmanagerVpcAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig">NetworkmanagerVpcAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig">NetworkmanagerVpcAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetRoutingPolicyLabel">ResetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions"></a>

```csharp
private void PutOptions(NetworkmanagerVpcAttachmentOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkmanagerVpcAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetRoutingPolicyLabel` <a name="ResetRoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetRoutingPolicyLabel"></a>

```csharp
private void ResetRoutingPolicyLabel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerVpcAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerVpcAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerVpcAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerVpcAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerVpcAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options">Options</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference">NetworkmanagerVpcAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabelInput">RoutingPolicyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput">SubnetArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput">VpcArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn">VpcArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation"></a>

```csharp
public string EdgeLocation { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options"></a>

```csharp
public NetworkmanagerVpcAttachmentOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a>

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeouts"></a>

```csharp
public NetworkmanagerVpcAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference">NetworkmanagerVpcAttachmentTimeoutsOutputReference</a>

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput"></a>

```csharp
public string CoreNetworkIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput"></a>

```csharp
public NetworkmanagerVpcAttachmentOptions OptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `RoutingPolicyLabelInput`<sup>Optional</sup> <a name="RoutingPolicyLabelInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabelInput"></a>

```csharp
public string RoutingPolicyLabelInput { get; }
```

- *Type:* string

---

##### `SubnetArnsInput`<sup>Optional</sup> <a name="SubnetArnsInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput"></a>

```csharp
public string[] SubnetArnsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>

---

##### `VpcArnInput`<sup>Optional</sup> <a name="VpcArnInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput"></a>

```csharp
public string VpcArnInput { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; }
```

- *Type:* string

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn"></a>

```csharp
public string VpcArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerVpcAttachmentConfig <a name="NetworkmanagerVpcAttachmentConfig" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerVpcAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CoreNetworkId,
    string[] SubnetArns,
    string VpcArn,
    string Id = null,
    NetworkmanagerVpcAttachmentOptions Options = null,
    string RoutingPolicyLabel = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    NetworkmanagerVpcAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn">VpcArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#routing_policy_label NetworkmanagerVpcAttachment#routing_policy_label}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}.

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}.

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn"></a>

```csharp
public string VpcArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options"></a>

```csharp
public NetworkmanagerVpcAttachmentOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `RoutingPolicyLabel`<sup>Optional</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#routing_policy_label NetworkmanagerVpcAttachment#routing_policy_label}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.timeouts"></a>

```csharp
public NetworkmanagerVpcAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#timeouts NetworkmanagerVpcAttachment#timeouts}

---

### NetworkmanagerVpcAttachmentOptions <a name="NetworkmanagerVpcAttachmentOptions" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerVpcAttachmentOptions {
    bool|IResolvable ApplianceModeSupport = null,
    bool|IResolvable DnsSupport = null,
    bool|IResolvable Ipv6Support = null,
    bool|IResolvable SecurityGroupReferencingSupport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.dnsSupport">DnsSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#dns_support NetworkmanagerVpcAttachment#dns_support}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support">Ipv6Support</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#ipv6_support NetworkmanagerVpcAttachment#ipv6_support}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#security_group_referencing_support NetworkmanagerVpcAttachment#security_group_referencing_support}. |

---

##### `ApplianceModeSupport`<sup>Optional</sup> <a name="ApplianceModeSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport"></a>

```csharp
public bool|IResolvable ApplianceModeSupport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}.

---

##### `DnsSupport`<sup>Optional</sup> <a name="DnsSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.dnsSupport"></a>

```csharp
public bool|IResolvable DnsSupport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#dns_support NetworkmanagerVpcAttachment#dns_support}.

---

##### `Ipv6Support`<sup>Optional</sup> <a name="Ipv6Support" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support"></a>

```csharp
public bool|IResolvable Ipv6Support { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#ipv6_support NetworkmanagerVpcAttachment#ipv6_support}.

---

##### `SecurityGroupReferencingSupport`<sup>Optional</sup> <a name="SecurityGroupReferencingSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.securityGroupReferencingSupport"></a>

```csharp
public bool|IResolvable SecurityGroupReferencingSupport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#security_group_referencing_support NetworkmanagerVpcAttachment#security_group_referencing_support}.

---

### NetworkmanagerVpcAttachmentTimeouts <a name="NetworkmanagerVpcAttachmentTimeouts" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerVpcAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#create NetworkmanagerVpcAttachment#create}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#delete NetworkmanagerVpcAttachment#delete}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#update NetworkmanagerVpcAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#create NetworkmanagerVpcAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#delete NetworkmanagerVpcAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/networkmanager_vpc_attachment#update NetworkmanagerVpcAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerVpcAttachmentOptionsOutputReference <a name="NetworkmanagerVpcAttachmentOptionsOutputReference" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerVpcAttachmentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport">ResetApplianceModeSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetDnsSupport">ResetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support">ResetIpv6Support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport">ResetSecurityGroupReferencingSupport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplianceModeSupport` <a name="ResetApplianceModeSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```csharp
private void ResetApplianceModeSupport()
```

##### `ResetDnsSupport` <a name="ResetDnsSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetDnsSupport"></a>

```csharp
private void ResetDnsSupport()
```

##### `ResetIpv6Support` <a name="ResetIpv6Support" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support"></a>

```csharp
private void ResetIpv6Support()
```

##### `ResetSecurityGroupReferencingSupport` <a name="ResetSecurityGroupReferencingSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport"></a>

```csharp
private void ResetSecurityGroupReferencingSupport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput">ApplianceModeSupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupportInput">DnsSupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput">Ipv6SupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput">SecurityGroupReferencingSupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport">DnsSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support">Ipv6Support</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplianceModeSupportInput`<sup>Optional</sup> <a name="ApplianceModeSupportInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```csharp
public bool|IResolvable ApplianceModeSupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DnsSupportInput`<sup>Optional</sup> <a name="DnsSupportInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupportInput"></a>

```csharp
public bool|IResolvable DnsSupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ipv6SupportInput`<sup>Optional</sup> <a name="Ipv6SupportInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```csharp
public bool|IResolvable Ipv6SupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupReferencingSupportInput`<sup>Optional</sup> <a name="SecurityGroupReferencingSupportInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput"></a>

```csharp
public bool|IResolvable SecurityGroupReferencingSupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApplianceModeSupport`<sup>Required</sup> <a name="ApplianceModeSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```csharp
public bool|IResolvable ApplianceModeSupport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DnsSupport`<sup>Required</sup> <a name="DnsSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport"></a>

```csharp
public bool|IResolvable DnsSupport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ipv6Support`<sup>Required</sup> <a name="Ipv6Support" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```csharp
public bool|IResolvable Ipv6Support { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupReferencingSupport`<sup>Required</sup> <a name="SecurityGroupReferencingSupport" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```csharp
public bool|IResolvable SecurityGroupReferencingSupport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```csharp
public NetworkmanagerVpcAttachmentOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---


### NetworkmanagerVpcAttachmentTimeoutsOutputReference <a name="NetworkmanagerVpcAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerVpcAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>

---



