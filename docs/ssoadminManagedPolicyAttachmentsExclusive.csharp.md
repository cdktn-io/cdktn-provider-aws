# `ssoadminManagedPolicyAttachmentsExclusive` Submodule <a name="`ssoadminManagedPolicyAttachmentsExclusive` Submodule" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminManagedPolicyAttachmentsExclusive <a name="SsoadminManagedPolicyAttachmentsExclusive" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive aws_ssoadmin_managed_policy_attachments_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminManagedPolicyAttachmentsExclusive(Construct Scope, string Id, SsoadminManagedPolicyAttachmentsExclusiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig">SsoadminManagedPolicyAttachmentsExclusiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig">SsoadminManagedPolicyAttachmentsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.putTimeouts"></a>

```csharp
private void PutTimeouts(SsoadminManagedPolicyAttachmentsExclusiveTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsoadminManagedPolicyAttachmentsExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminManagedPolicyAttachmentsExclusive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminManagedPolicyAttachmentsExclusive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminManagedPolicyAttachmentsExclusive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsoadminManagedPolicyAttachmentsExclusive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsoadminManagedPolicyAttachmentsExclusive resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoadminManagedPolicyAttachmentsExclusive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoadminManagedPolicyAttachmentsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsoadminManagedPolicyAttachmentsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference">SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.managedPolicyArnsInput">ManagedPolicyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.permissionSetArnInput">PermissionSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.managedPolicyArns">ManagedPolicyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.permissionSetArn">PermissionSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.timeouts"></a>

```csharp
public SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference">SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference</a>

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `ManagedPolicyArnsInput`<sup>Optional</sup> <a name="ManagedPolicyArnsInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.managedPolicyArnsInput"></a>

```csharp
public string[] ManagedPolicyArnsInput { get; }
```

- *Type:* string[]

---

##### `PermissionSetArnInput`<sup>Optional</sup> <a name="PermissionSetArnInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.permissionSetArnInput"></a>

```csharp
public string PermissionSetArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.timeoutsInput"></a>

```csharp
public IResolvable|SsoadminManagedPolicyAttachmentsExclusiveTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a>

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `ManagedPolicyArns`<sup>Required</sup> <a name="ManagedPolicyArns" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.managedPolicyArns"></a>

```csharp
public string[] ManagedPolicyArns { get; }
```

- *Type:* string[]

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.permissionSetArn"></a>

```csharp
public string PermissionSetArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminManagedPolicyAttachmentsExclusiveConfig <a name="SsoadminManagedPolicyAttachmentsExclusiveConfig" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminManagedPolicyAttachmentsExclusiveConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string[] ManagedPolicyArns,
    string PermissionSetArn,
    string Region = null,
    SsoadminManagedPolicyAttachmentsExclusiveTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#instance_arn SsoadminManagedPolicyAttachmentsExclusive#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.managedPolicyArns">ManagedPolicyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#managed_policy_arns SsoadminManagedPolicyAttachmentsExclusive#managed_policy_arns}. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.permissionSetArn">PermissionSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#permission_set_arn SsoadminManagedPolicyAttachmentsExclusive#permission_set_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#instance_arn SsoadminManagedPolicyAttachmentsExclusive#instance_arn}.

---

##### `ManagedPolicyArns`<sup>Required</sup> <a name="ManagedPolicyArns" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.managedPolicyArns"></a>

```csharp
public string[] ManagedPolicyArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#managed_policy_arns SsoadminManagedPolicyAttachmentsExclusive#managed_policy_arns}.

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.permissionSetArn"></a>

```csharp
public string PermissionSetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#permission_set_arn SsoadminManagedPolicyAttachmentsExclusive#permission_set_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#region SsoadminManagedPolicyAttachmentsExclusive#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.timeouts"></a>

```csharp
public SsoadminManagedPolicyAttachmentsExclusiveTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#timeouts SsoadminManagedPolicyAttachmentsExclusive#timeouts}

---

### SsoadminManagedPolicyAttachmentsExclusiveTimeouts <a name="SsoadminManagedPolicyAttachmentsExclusiveTimeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminManagedPolicyAttachmentsExclusiveTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#create SsoadminManagedPolicyAttachmentsExclusive#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#update SsoadminManagedPolicyAttachmentsExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference <a name="SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsoadminManagedPolicyAttachmentsExclusiveTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a>

---



