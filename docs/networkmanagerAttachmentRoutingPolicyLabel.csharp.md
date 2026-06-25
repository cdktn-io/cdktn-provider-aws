# `networkmanagerAttachmentRoutingPolicyLabel` Submodule <a name="`networkmanagerAttachmentRoutingPolicyLabel` Submodule" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerAttachmentRoutingPolicyLabel <a name="NetworkmanagerAttachmentRoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_attachment_routing_policy_label aws_networkmanager_attachment_routing_policy_label}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerAttachmentRoutingPolicyLabel(Construct Scope, string Id, NetworkmanagerAttachmentRoutingPolicyLabelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig">NetworkmanagerAttachmentRoutingPolicyLabelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig">NetworkmanagerAttachmentRoutingPolicyLabelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerAttachmentRoutingPolicyLabel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerAttachmentRoutingPolicyLabel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerAttachmentRoutingPolicyLabel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerAttachmentRoutingPolicyLabel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerAttachmentRoutingPolicyLabel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkmanagerAttachmentRoutingPolicyLabel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerAttachmentRoutingPolicyLabel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerAttachmentRoutingPolicyLabel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_attachment_routing_policy_label#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerAttachmentRoutingPolicyLabel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.attachmentIdInput">AttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.routingPolicyLabelInput">RoutingPolicyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.attachmentId">AttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttachmentIdInput`<sup>Optional</sup> <a name="AttachmentIdInput" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.attachmentIdInput"></a>

```csharp
public string AttachmentIdInput { get; }
```

- *Type:* string

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.coreNetworkIdInput"></a>

```csharp
public string CoreNetworkIdInput { get; }
```

- *Type:* string

---

##### `RoutingPolicyLabelInput`<sup>Optional</sup> <a name="RoutingPolicyLabelInput" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.routingPolicyLabelInput"></a>

```csharp
public string RoutingPolicyLabelInput { get; }
```

- *Type:* string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.attachmentId"></a>

```csharp
public string AttachmentId { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerAttachmentRoutingPolicyLabelConfig <a name="NetworkmanagerAttachmentRoutingPolicyLabelConfig" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerAttachmentRoutingPolicyLabelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AttachmentId,
    string CoreNetworkId,
    string RoutingPolicyLabel
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.attachmentId">AttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_attachment_routing_policy_label#attachment_id NetworkmanagerAttachmentRoutingPolicyLabel#attachment_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_attachment_routing_policy_label#core_network_id NetworkmanagerAttachmentRoutingPolicyLabel#core_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_attachment_routing_policy_label#routing_policy_label NetworkmanagerAttachmentRoutingPolicyLabel#routing_policy_label}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.attachmentId"></a>

```csharp
public string AttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_attachment_routing_policy_label#attachment_id NetworkmanagerAttachmentRoutingPolicyLabel#attachment_id}.

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_attachment_routing_policy_label#core_network_id NetworkmanagerAttachmentRoutingPolicyLabel#core_network_id}.

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerAttachmentRoutingPolicyLabel.NetworkmanagerAttachmentRoutingPolicyLabelConfig.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/networkmanager_attachment_routing_policy_label#routing_policy_label NetworkmanagerAttachmentRoutingPolicyLabel#routing_policy_label}.

---



