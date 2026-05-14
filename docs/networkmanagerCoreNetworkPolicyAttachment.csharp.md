# `networkmanagerCoreNetworkPolicyAttachment` Submodule <a name="`networkmanagerCoreNetworkPolicyAttachment` Submodule" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetworkPolicyAttachment <a name="NetworkmanagerCoreNetworkPolicyAttachment" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment aws_networkmanager_core_network_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerCoreNetworkPolicyAttachment(Construct Scope, string Id, NetworkmanagerCoreNetworkPolicyAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig">NetworkmanagerCoreNetworkPolicyAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig">NetworkmanagerCoreNetworkPolicyAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkmanagerCoreNetworkPolicyAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerCoreNetworkPolicyAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerCoreNetworkPolicyAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerCoreNetworkPolicyAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerCoreNetworkPolicyAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerCoreNetworkPolicyAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkmanagerCoreNetworkPolicyAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerCoreNetworkPolicyAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerCoreNetworkPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerCoreNetworkPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference">NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeouts"></a>

```csharp
public NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference">NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference</a>

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkIdInput"></a>

```csharp
public string CoreNetworkIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkmanagerCoreNetworkPolicyAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkPolicyAttachmentConfig <a name="NetworkmanagerCoreNetworkPolicyAttachmentConfig" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerCoreNetworkPolicyAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CoreNetworkId,
    string PolicyDocument,
    string Id = null,
    NetworkmanagerCoreNetworkPolicyAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}.

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.timeouts"></a>

```csharp
public NetworkmanagerCoreNetworkPolicyAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#timeouts NetworkmanagerCoreNetworkPolicyAttachment#timeouts}

---

### NetworkmanagerCoreNetworkPolicyAttachmentTimeouts <a name="NetworkmanagerCoreNetworkPolicyAttachmentTimeouts" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerCoreNetworkPolicyAttachmentTimeouts {
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}. |

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference <a name="NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerCoreNetworkPolicyAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

---



