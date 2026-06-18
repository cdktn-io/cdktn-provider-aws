# `vpcPeeringConnection` Submodule <a name="`vpcPeeringConnection` Submodule" id="@cdktn/provider-aws.vpcPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnection <a name="VpcPeeringConnection" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection aws_vpc_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcPeeringConnection(Construct Scope, string Id, VpcPeeringConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig">VpcPeeringConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig">VpcPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter">PutAccepter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester">PutRequester</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAccepter">ResetAccepter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAutoAccept">ResetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerOwnerId">ResetPeerOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerRegion">ResetPeerRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetRequester">ResetRequester</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccepter` <a name="PutAccepter" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter"></a>

```csharp
private void PutAccepter(VpcPeeringConnectionAccepter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putAccepter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---

##### `PutRequester` <a name="PutRequester" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester"></a>

```csharp
private void PutRequester(VpcPeeringConnectionRequester Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putRequester.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(VpcPeeringConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

---

##### `ResetAccepter` <a name="ResetAccepter" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAccepter"></a>

```csharp
private void ResetAccepter()
```

##### `ResetAutoAccept` <a name="ResetAutoAccept" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetAutoAccept"></a>

```csharp
private void ResetAutoAccept()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPeerOwnerId` <a name="ResetPeerOwnerId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerOwnerId"></a>

```csharp
private void ResetPeerOwnerId()
```

##### `ResetPeerRegion` <a name="ResetPeerRegion" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetPeerRegion"></a>

```csharp
private void ResetPeerRegion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRequester` <a name="ResetRequester" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetRequester"></a>

```csharp
private void ResetRequester()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpcPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcPeeringConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcPeeringConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcPeeringConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcPeeringConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpcPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcPeeringConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpcPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepter">Accepter</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference">VpcPeeringConnectionAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.acceptStatus">AcceptStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requester">Requester</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference">VpcPeeringConnectionRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference">VpcPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepterInput">AccepterInput</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAcceptInput">AutoAcceptInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerIdInput">PeerOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegionInput">PeerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcIdInput">PeerVpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requesterInput">RequesterInput</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAccept">AutoAccept</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerId">PeerOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegion">PeerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcId">PeerVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accepter`<sup>Required</sup> <a name="Accepter" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepter"></a>

```csharp
public VpcPeeringConnectionAccepterOutputReference Accepter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference">VpcPeeringConnectionAccepterOutputReference</a>

---

##### `AcceptStatus`<sup>Required</sup> <a name="AcceptStatus" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.acceptStatus"></a>

```csharp
public string AcceptStatus { get; }
```

- *Type:* string

---

##### `Requester`<sup>Required</sup> <a name="Requester" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requester"></a>

```csharp
public VpcPeeringConnectionRequesterOutputReference Requester { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference">VpcPeeringConnectionRequesterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeouts"></a>

```csharp
public VpcPeeringConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference">VpcPeeringConnectionTimeoutsOutputReference</a>

---

##### `AccepterInput`<sup>Optional</sup> <a name="AccepterInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.accepterInput"></a>

```csharp
public VpcPeeringConnectionAccepter AccepterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---

##### `AutoAcceptInput`<sup>Optional</sup> <a name="AutoAcceptInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAcceptInput"></a>

```csharp
public bool|IResolvable AutoAcceptInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PeerOwnerIdInput`<sup>Optional</sup> <a name="PeerOwnerIdInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerIdInput"></a>

```csharp
public string PeerOwnerIdInput { get; }
```

- *Type:* string

---

##### `PeerRegionInput`<sup>Optional</sup> <a name="PeerRegionInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegionInput"></a>

```csharp
public string PeerRegionInput { get; }
```

- *Type:* string

---

##### `PeerVpcIdInput`<sup>Optional</sup> <a name="PeerVpcIdInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcIdInput"></a>

```csharp
public string PeerVpcIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RequesterInput`<sup>Optional</sup> <a name="RequesterInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.requesterInput"></a>

```csharp
public VpcPeeringConnectionRequester RequesterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.timeoutsInput"></a>

```csharp
public IResolvable|VpcPeeringConnectionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.autoAccept"></a>

```csharp
public bool|IResolvable AutoAccept { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PeerOwnerId`<sup>Required</sup> <a name="PeerOwnerId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerId"></a>

```csharp
public string PeerOwnerId { get; }
```

- *Type:* string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerRegion"></a>

```csharp
public string PeerRegion { get; }
```

- *Type:* string

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcId"></a>

```csharp
public string PeerVpcId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepter <a name="VpcPeeringConnectionAccepter" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcPeeringConnectionAccepter {
    bool|IResolvable AllowRemoteVpcDnsResolution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}. |

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowRemoteVpcDnsResolution"></a>

```csharp
public bool|IResolvable AllowRemoteVpcDnsResolution { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

### VpcPeeringConnectionConfig <a name="VpcPeeringConnectionConfig" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcPeeringConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PeerVpcId,
    string VpcId,
    VpcPeeringConnectionAccepter Accepter = null,
    bool|IResolvable AutoAccept = null,
    string Id = null,
    string PeerOwnerId = null,
    string PeerRegion = null,
    string Region = null,
    VpcPeeringConnectionRequester Requester = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VpcPeeringConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerVpcId">PeerVpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.accepter">Accepter</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | accepter block. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.autoAccept">AutoAccept</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#id VpcPeeringConnection#id}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerOwnerId">PeerOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerRegion">PeerRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.requester">Requester</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | requester block. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#tags VpcPeeringConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerVpcId"></a>

```csharp
public string PeerVpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}.

---

##### `Accepter`<sup>Optional</sup> <a name="Accepter" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.accepter"></a>

```csharp
public VpcPeeringConnectionAccepter Accepter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#accepter VpcPeeringConnection#accepter}

---

##### `AutoAccept`<sup>Optional</sup> <a name="AutoAccept" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.autoAccept"></a>

```csharp
public bool|IResolvable AutoAccept { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#id VpcPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PeerOwnerId`<sup>Optional</sup> <a name="PeerOwnerId" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerOwnerId"></a>

```csharp
public string PeerOwnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}.

---

##### `PeerRegion`<sup>Optional</sup> <a name="PeerRegion" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerRegion"></a>

```csharp
public string PeerRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#region VpcPeeringConnection#region}

---

##### `Requester`<sup>Optional</sup> <a name="Requester" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.requester"></a>

```csharp
public VpcPeeringConnectionRequester Requester { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

requester block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#requester VpcPeeringConnection#requester}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#tags VpcPeeringConnection#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionConfig.property.timeouts"></a>

```csharp
public VpcPeeringConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#timeouts VpcPeeringConnection#timeouts}

---

### VpcPeeringConnectionRequester <a name="VpcPeeringConnectionRequester" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcPeeringConnectionRequester {
    bool|IResolvable AllowRemoteVpcDnsResolution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}. |

---

##### `AllowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowRemoteVpcDnsResolution"></a>

```csharp
public bool|IResolvable AllowRemoteVpcDnsResolution { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

### VpcPeeringConnectionTimeouts <a name="VpcPeeringConnectionTimeouts" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcPeeringConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#create VpcPeeringConnection#create}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#delete VpcPeeringConnection#delete}. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#update VpcPeeringConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#create VpcPeeringConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#delete VpcPeeringConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/vpc_peering_connection#update VpcPeeringConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterOutputReference <a name="VpcPeeringConnectionAccepterOutputReference" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcPeeringConnectionAccepterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```csharp
private void ResetAllowRemoteVpcDnsResolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```csharp
public bool|IResolvable AllowRemoteVpcDnsResolutionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```csharp
public bool|IResolvable AllowRemoteVpcDnsResolution { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.internalValue"></a>

```csharp
public VpcPeeringConnectionAccepter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---


### VpcPeeringConnectionRequesterOutputReference <a name="VpcPeeringConnectionRequesterOutputReference" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcPeeringConnectionRequesterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowRemoteVpcDnsResolution">ResetAllowRemoteVpcDnsResolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowRemoteVpcDnsResolution` <a name="ResetAllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```csharp
private void ResetAllowRemoteVpcDnsResolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">AllowRemoteVpcDnsResolutionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolution">AllowRemoteVpcDnsResolution</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="AllowRemoteVpcDnsResolutionInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```csharp
public bool|IResolvable AllowRemoteVpcDnsResolutionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowRemoteVpcDnsResolution`<sup>Required</sup> <a name="AllowRemoteVpcDnsResolution" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```csharp
public bool|IResolvable AllowRemoteVpcDnsResolution { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.internalValue"></a>

```csharp
public VpcPeeringConnectionRequester InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---


### VpcPeeringConnectionTimeoutsOutputReference <a name="VpcPeeringConnectionTimeoutsOutputReference" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcPeeringConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpcPeeringConnectionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

---



