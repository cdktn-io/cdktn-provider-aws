# `dxHostedPublicVirtualInterfaceAccepter` Submodule <a name="`dxHostedPublicVirtualInterfaceAccepter` Submodule" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPublicVirtualInterfaceAccepter <a name="DxHostedPublicVirtualInterfaceAccepter" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter aws_dx_hosted_public_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DxHostedPublicVirtualInterfaceAccepter(Construct Scope, string Id, DxHostedPublicVirtualInterfaceAccepterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig">DxHostedPublicVirtualInterfaceAccepterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig">DxHostedPublicVirtualInterfaceAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts"></a>

```csharp
private void PutTimeouts(DxHostedPublicVirtualInterfaceAccepterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DxHostedPublicVirtualInterfaceAccepter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DxHostedPublicVirtualInterfaceAccepter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DxHostedPublicVirtualInterfaceAccepter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DxHostedPublicVirtualInterfaceAccepter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DxHostedPublicVirtualInterfaceAccepter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DxHostedPublicVirtualInterfaceAccepter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DxHostedPublicVirtualInterfaceAccepter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DxHostedPublicVirtualInterfaceAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DxHostedPublicVirtualInterfaceAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceIdInput">VirtualInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeouts"></a>

```csharp
public DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeoutsInput"></a>

```csharp
public IResolvable|DxHostedPublicVirtualInterfaceAccepterTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>

---

##### `VirtualInterfaceIdInput`<sup>Optional</sup> <a name="VirtualInterfaceIdInput" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```csharp
public string VirtualInterfaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPublicVirtualInterfaceAccepterConfig <a name="DxHostedPublicVirtualInterfaceAccepterConfig" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DxHostedPublicVirtualInterfaceAccepterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string VirtualInterfaceId,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DxHostedPublicVirtualInterfaceAccepterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#id DxHostedPublicVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#tags DxHostedPublicVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#id DxHostedPublicVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#region DxHostedPublicVirtualInterfaceAccepter#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#tags DxHostedPublicVirtualInterfaceAccepter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.timeouts"></a>

```csharp
public DxHostedPublicVirtualInterfaceAccepterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#timeouts DxHostedPublicVirtualInterfaceAccepter#timeouts}

---

### DxHostedPublicVirtualInterfaceAccepterTimeouts <a name="DxHostedPublicVirtualInterfaceAccepterTimeouts" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DxHostedPublicVirtualInterfaceAccepterTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#create DxHostedPublicVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#delete DxHostedPublicVirtualInterfaceAccepter#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#create DxHostedPublicVirtualInterfaceAccepter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/dx_hosted_public_virtual_interface_accepter#delete DxHostedPublicVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DxHostedPublicVirtualInterfaceAccepterTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>

---



