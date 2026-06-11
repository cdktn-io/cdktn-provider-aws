# `ec2ClientVpnNetworkAssociation` Submodule <a name="`ec2ClientVpnNetworkAssociation` Submodule" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnNetworkAssociation <a name="Ec2ClientVpnNetworkAssociation" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association aws_ec2_client_vpn_network_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ClientVpnNetworkAssociation(Construct Scope, string Id, Ec2ClientVpnNetworkAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig">Ec2ClientVpnNetworkAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig">Ec2ClientVpnNetworkAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(Ec2ClientVpnNetworkAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ClientVpnNetworkAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ClientVpnNetworkAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ClientVpnNetworkAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ClientVpnNetworkAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2ClientVpnNetworkAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2ClientVpnNetworkAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2ClientVpnNetworkAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2ClientVpnNetworkAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ClientVpnNetworkAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference">Ec2ClientVpnNetworkAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointIdInput">ClientVpnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.timeouts"></a>

```csharp
public Ec2ClientVpnNetworkAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference">Ec2ClientVpnNetworkAssociationTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `ClientVpnEndpointIdInput`<sup>Optional</sup> <a name="ClientVpnEndpointIdInput" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointIdInput"></a>

```csharp
public string ClientVpnEndpointIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|Ec2ClientVpnNetworkAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnNetworkAssociationConfig <a name="Ec2ClientVpnNetworkAssociationConfig" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ClientVpnNetworkAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientVpnEndpointId,
    string SubnetId,
    string Id = null,
    string Region = null,
    Ec2ClientVpnNetworkAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.clientVpnEndpointId"></a>

```csharp
public string ClientVpnEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#region Ec2ClientVpnNetworkAssociation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.timeouts"></a>

```csharp
public Ec2ClientVpnNetworkAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#timeouts Ec2ClientVpnNetworkAssociation#timeouts}

---

### Ec2ClientVpnNetworkAssociationTimeouts <a name="Ec2ClientVpnNetworkAssociationTimeouts" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ClientVpnNetworkAssociationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#create Ec2ClientVpnNetworkAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#delete Ec2ClientVpnNetworkAssociation#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#create Ec2ClientVpnNetworkAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/ec2_client_vpn_network_association#delete Ec2ClientVpnNetworkAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnNetworkAssociationTimeoutsOutputReference <a name="Ec2ClientVpnNetworkAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2ClientVpnNetworkAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2ClientVpnNetworkAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>

---



