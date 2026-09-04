# `vpclatticeServiceNetworkResourceAssociation` Submodule <a name="`vpclatticeServiceNetworkResourceAssociation` Submodule" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkResourceAssociation <a name="VpclatticeServiceNetworkResourceAssociation" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association aws_vpclattice_service_network_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpclatticeServiceNetworkResourceAssociation(Construct Scope, string Id, VpclatticeServiceNetworkResourceAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig">VpclatticeServiceNetworkResourceAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig">VpclatticeServiceNetworkResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetPrivateDnsEnabled">ResetPrivateDnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(VpclatticeServiceNetworkResourceAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

---

##### `ResetPrivateDnsEnabled` <a name="ResetPrivateDnsEnabled" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetPrivateDnsEnabled"></a>

```csharp
private void ResetPrivateDnsEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpclatticeServiceNetworkResourceAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpclatticeServiceNetworkResourceAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpclatticeServiceNetworkResourceAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpclatticeServiceNetworkResourceAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeServiceNetworkResourceAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeServiceNetworkResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dnsEntry">DnsEntry</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList">VpclatticeServiceNetworkResourceAssociationDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabledInput">PrivateDnsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifierInput">ResourceConfigurationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifierInput">ServiceNetworkIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DnsEntry`<sup>Required</sup> <a name="DnsEntry" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.dnsEntry"></a>

```csharp
public VpclatticeServiceNetworkResourceAssociationDnsEntryList DnsEntry { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList">VpclatticeServiceNetworkResourceAssociationDnsEntryList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeouts"></a>

```csharp
public VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference</a>

---

##### `PrivateDnsEnabledInput`<sup>Optional</sup> <a name="PrivateDnsEnabledInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabledInput"></a>

```csharp
public bool|IResolvable PrivateDnsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="ResourceConfigurationIdentifierInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifierInput"></a>

```csharp
public string ResourceConfigurationIdentifierInput { get; }
```

- *Type:* string

---

##### `ServiceNetworkIdentifierInput`<sup>Optional</sup> <a name="ServiceNetworkIdentifierInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifierInput"></a>

```csharp
public string ServiceNetworkIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkResourceAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

---

##### `PrivateDnsEnabled`<sup>Required</sup> <a name="PrivateDnsEnabled" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabled"></a>

```csharp
public bool|IResolvable PrivateDnsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationIdentifier"></a>

```csharp
public string ResourceConfigurationIdentifier { get; }
```

- *Type:* string

---

##### `ServiceNetworkIdentifier`<sup>Required</sup> <a name="ServiceNetworkIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.serviceNetworkIdentifier"></a>

```csharp
public string ServiceNetworkIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkResourceAssociationConfig <a name="VpclatticeServiceNetworkResourceAssociationConfig" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpclatticeServiceNetworkResourceAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceConfigurationIdentifier,
    string ServiceNetworkIdentifier,
    bool|IResolvable PrivateDnsEnabled = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VpclatticeServiceNetworkResourceAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.resourceConfigurationIdentifier">ResourceConfigurationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#private_dns_enabled VpclatticeServiceNetworkResourceAssociation#private_dns_enabled}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceConfigurationIdentifier`<sup>Required</sup> <a name="ResourceConfigurationIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.resourceConfigurationIdentifier"></a>

```csharp
public string ResourceConfigurationIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}.

---

##### `ServiceNetworkIdentifier`<sup>Required</sup> <a name="ServiceNetworkIdentifier" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.serviceNetworkIdentifier"></a>

```csharp
public string ServiceNetworkIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}.

---

##### `PrivateDnsEnabled`<sup>Optional</sup> <a name="PrivateDnsEnabled" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.privateDnsEnabled"></a>

```csharp
public bool|IResolvable PrivateDnsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#private_dns_enabled VpclatticeServiceNetworkResourceAssociation#private_dns_enabled}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#region VpclatticeServiceNetworkResourceAssociation#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationConfig.property.timeouts"></a>

```csharp
public VpclatticeServiceNetworkResourceAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#timeouts VpclatticeServiceNetworkResourceAssociation#timeouts}

---

### VpclatticeServiceNetworkResourceAssociationDnsEntry <a name="VpclatticeServiceNetworkResourceAssociationDnsEntry" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpclatticeServiceNetworkResourceAssociationDnsEntry {

};
```


### VpclatticeServiceNetworkResourceAssociationTimeouts <a name="VpclatticeServiceNetworkResourceAssociationTimeouts" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpclatticeServiceNetworkResourceAssociationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#create VpclatticeServiceNetworkResourceAssociation#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/vpclattice_service_network_resource_association#delete VpclatticeServiceNetworkResourceAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkResourceAssociationDnsEntryList <a name="VpclatticeServiceNetworkResourceAssociationDnsEntryList" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpclatticeServiceNetworkResourceAssociationDnsEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get"></a>

```csharp
private VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference <a name="VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry">VpclatticeServiceNetworkResourceAssociationDnsEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference.property.internalValue"></a>

```csharp
public VpclatticeServiceNetworkResourceAssociationDnsEntry InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationDnsEntry">VpclatticeServiceNetworkResourceAssociationDnsEntry</a>

---


### VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference <a name="VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeServiceNetworkResourceAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpclatticeServiceNetworkResourceAssociation.VpclatticeServiceNetworkResourceAssociationTimeouts">VpclatticeServiceNetworkResourceAssociationTimeouts</a>

---



