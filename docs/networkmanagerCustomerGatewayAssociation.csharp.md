# `networkmanagerCustomerGatewayAssociation` Submodule <a name="`networkmanagerCustomerGatewayAssociation` Submodule" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCustomerGatewayAssociation <a name="NetworkmanagerCustomerGatewayAssociation" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association aws_networkmanager_customer_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerCustomerGatewayAssociation(Construct Scope, string Id, NetworkmanagerCustomerGatewayAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig">NetworkmanagerCustomerGatewayAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig">NetworkmanagerCustomerGatewayAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetLinkId">ResetLinkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkmanagerCustomerGatewayAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLinkId` <a name="ResetLinkId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetLinkId"></a>

```csharp
private void ResetLinkId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerCustomerGatewayAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerCustomerGatewayAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerCustomerGatewayAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerCustomerGatewayAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkmanagerCustomerGatewayAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkmanagerCustomerGatewayAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerCustomerGatewayAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerCustomerGatewayAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerCustomerGatewayAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference">NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArnInput">CustomerGatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceIdInput">DeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkIdInput">GlobalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkIdInput">LinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArn">CustomerGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkId">GlobalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkId">LinkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeouts"></a>

```csharp
public NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference">NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference</a>

---

##### `CustomerGatewayArnInput`<sup>Optional</sup> <a name="CustomerGatewayArnInput" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArnInput"></a>

```csharp
public string CustomerGatewayArnInput { get; }
```

- *Type:* string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceIdInput"></a>

```csharp
public string DeviceIdInput { get; }
```

- *Type:* string

---

##### `GlobalNetworkIdInput`<sup>Optional</sup> <a name="GlobalNetworkIdInput" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkIdInput"></a>

```csharp
public string GlobalNetworkIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkIdInput`<sup>Optional</sup> <a name="LinkIdInput" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkIdInput"></a>

```csharp
public string LinkIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkmanagerCustomerGatewayAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

---

##### `CustomerGatewayArn`<sup>Required</sup> <a name="CustomerGatewayArn" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.customerGatewayArn"></a>

```csharp
public string CustomerGatewayArn { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.globalNetworkId"></a>

```csharp
public string GlobalNetworkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.linkId"></a>

```csharp
public string LinkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCustomerGatewayAssociationConfig <a name="NetworkmanagerCustomerGatewayAssociationConfig" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerCustomerGatewayAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CustomerGatewayArn,
    string DeviceId,
    string GlobalNetworkId,
    string Id = null,
    string LinkId = null,
    NetworkmanagerCustomerGatewayAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.customerGatewayArn">CustomerGatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.deviceId">DeviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.globalNetworkId">GlobalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.linkId">LinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CustomerGatewayArn`<sup>Required</sup> <a name="CustomerGatewayArn" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.customerGatewayArn"></a>

```csharp
public string CustomerGatewayArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}.

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.deviceId"></a>

```csharp
public string DeviceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}.

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.globalNetworkId"></a>

```csharp
public string GlobalNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkId`<sup>Optional</sup> <a name="LinkId" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.linkId"></a>

```csharp
public string LinkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationConfig.property.timeouts"></a>

```csharp
public NetworkmanagerCustomerGatewayAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#timeouts NetworkmanagerCustomerGatewayAssociation#timeouts}

---

### NetworkmanagerCustomerGatewayAssociationTimeouts <a name="NetworkmanagerCustomerGatewayAssociationTimeouts" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerCustomerGatewayAssociationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference <a name="NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerCustomerGatewayAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkmanagerCustomerGatewayAssociation.NetworkmanagerCustomerGatewayAssociationTimeouts">NetworkmanagerCustomerGatewayAssociationTimeouts</a>

---



