# `pinpointsmsvoicev2Pool` Submodule <a name="`pinpointsmsvoicev2Pool` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2Pool <a name="Pinpointsmsvoicev2Pool" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool aws_pinpointsmsvoicev2_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2Pool(Construct Scope, string Id, Pinpointsmsvoicev2PoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig">Pinpointsmsvoicev2PoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig">Pinpointsmsvoicev2PoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode">ResetIsoCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName">ResetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled">ResetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled">ResetSharedRoutesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn">ResetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole">ResetTwoWayChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled">ResetTwoWayEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts"></a>

```csharp
private void PutTimeouts(Pinpointsmsvoicev2PoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetIsoCountryCode` <a name="ResetIsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode"></a>

```csharp
private void ResetIsoCountryCode()
```

##### `ResetOptOutListName` <a name="ResetOptOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName"></a>

```csharp
private void ResetOptOutListName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSelfManagedOptOutsEnabled` <a name="ResetSelfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled"></a>

```csharp
private void ResetSelfManagedOptOutsEnabled()
```

##### `ResetSharedRoutesEnabled` <a name="ResetSharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled"></a>

```csharp
private void ResetSharedRoutesEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTwoWayChannelArn` <a name="ResetTwoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn"></a>

```csharp
private void ResetTwoWayChannelArn()
```

##### `ResetTwoWayChannelRole` <a name="ResetTwoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole"></a>

```csharp
private void ResetTwoWayChannelRole()
```

##### `ResetTwoWayEnabled` <a name="ResetTwoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled"></a>

```csharp
private void ResetTwoWayEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2Pool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2Pool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2Pool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2Pool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2Pool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2Pool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2Pool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput">IsoCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput">MessageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput">OptOutListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput">OriginationIdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput">SelfManagedOptOutsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput">SharedRoutesEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput">TwoWayChannelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput">TwoWayChannelRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput">TwoWayEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode">IsoCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType">MessageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName">OptOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities">OriginationIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled">SharedRoutesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts"></a>

```csharp
public Pinpointsmsvoicev2PoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsoCountryCodeInput`<sup>Optional</sup> <a name="IsoCountryCodeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput"></a>

```csharp
public string IsoCountryCodeInput { get; }
```

- *Type:* string

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput"></a>

```csharp
public string MessageTypeInput { get; }
```

- *Type:* string

---

##### `OptOutListNameInput`<sup>Optional</sup> <a name="OptOutListNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput"></a>

```csharp
public string OptOutListNameInput { get; }
```

- *Type:* string

---

##### `OriginationIdentitiesInput`<sup>Optional</sup> <a name="OriginationIdentitiesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput"></a>

```csharp
public string[] OriginationIdentitiesInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SelfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SharedRoutesEnabledInput`<sup>Optional</sup> <a name="SharedRoutesEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput"></a>

```csharp
public bool|IResolvable SharedRoutesEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2PoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---

##### `TwoWayChannelArnInput`<sup>Optional</sup> <a name="TwoWayChannelArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput"></a>

```csharp
public string TwoWayChannelArnInput { get; }
```

- *Type:* string

---

##### `TwoWayChannelRoleInput`<sup>Optional</sup> <a name="TwoWayChannelRoleInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput"></a>

```csharp
public string TwoWayChannelRoleInput { get; }
```

- *Type:* string

---

##### `TwoWayEnabledInput`<sup>Optional</sup> <a name="TwoWayEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput"></a>

```csharp
public bool|IResolvable TwoWayEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsoCountryCode`<sup>Required</sup> <a name="IsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode"></a>

```csharp
public string IsoCountryCode { get; }
```

- *Type:* string

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType"></a>

```csharp
public string MessageType { get; }
```

- *Type:* string

---

##### `OptOutListName`<sup>Required</sup> <a name="OptOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName"></a>

```csharp
public string OptOutListName { get; }
```

- *Type:* string

---

##### `OriginationIdentities`<sup>Required</sup> <a name="OriginationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities"></a>

```csharp
public string[] OriginationIdentities { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SelfManagedOptOutsEnabled`<sup>Required</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SharedRoutesEnabled`<sup>Required</sup> <a name="SharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled"></a>

```csharp
public bool|IResolvable SharedRoutesEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TwoWayChannelArn`<sup>Required</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn"></a>

```csharp
public string TwoWayChannelArn { get; }
```

- *Type:* string

---

##### `TwoWayChannelRole`<sup>Required</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole"></a>

```csharp
public string TwoWayChannelRole { get; }
```

- *Type:* string

---

##### `TwoWayEnabled`<sup>Required</sup> <a name="TwoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled"></a>

```csharp
public bool|IResolvable TwoWayEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2PoolConfig <a name="Pinpointsmsvoicev2PoolConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2PoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string MessageType,
    string[] OriginationIdentities,
    bool|IResolvable DeletionProtectionEnabled = null,
    string IsoCountryCode = null,
    string OptOutListName = null,
    string Region = null,
    bool|IResolvable SelfManagedOptOutsEnabled = null,
    bool|IResolvable SharedRoutesEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    Pinpointsmsvoicev2PoolTimeouts Timeouts = null,
    string TwoWayChannelArn = null,
    string TwoWayChannelRole = null,
    bool|IResolvable TwoWayEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType">MessageType</a></code> | <code>string</code> | Type of message. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities">OriginationIdentities</a></code> | <code>string[]</code> | Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether deletion protection is enabled. When `true`, the pool cannot be deleted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode">IsoCountryCode</a></code> | <code>string</code> | Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName">OptOutListName</a></code> | <code>string</code> | Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the pool relies on self-managed opt-out handling. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled">SharedRoutesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>string</code> | ARN of the two-way channel that receives inbound messages. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>string</code> | ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether inbound message reception is enabled for the pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType"></a>

```csharp
public string MessageType { get; set; }
```

- *Type:* string

Type of message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#message_type Pinpointsmsvoicev2Pool#message_type}

---

##### `OriginationIdentities`<sup>Required</sup> <a name="OriginationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities"></a>

```csharp
public string[] OriginationIdentities { get; set; }
```

- *Type:* string[]

Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#origination_identities Pinpointsmsvoicev2Pool#origination_identities}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether deletion protection is enabled. When `true`, the pool cannot be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#deletion_protection_enabled Pinpointsmsvoicev2Pool#deletion_protection_enabled}

---

##### `IsoCountryCode`<sup>Optional</sup> <a name="IsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode"></a>

```csharp
public string IsoCountryCode { get; set; }
```

- *Type:* string

Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool.

This field is optional for origination identity types that are not country-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#iso_country_code Pinpointsmsvoicev2Pool#iso_country_code}

---

##### `OptOutListName`<sup>Optional</sup> <a name="OptOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName"></a>

```csharp
public string OptOutListName { get; set; }
```

- *Type:* string

Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#opt_out_list_name Pinpointsmsvoicev2Pool#opt_out_list_name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#region Pinpointsmsvoicev2Pool#region}

---

##### `SelfManagedOptOutsEnabled`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled"></a>

```csharp
public bool|IResolvable SelfManagedOptOutsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the pool relies on self-managed opt-out handling.

When `false`, AWS auto-replies to HELP/STOP requests and manages the opt-out list. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#self_managed_opt_outs_enabled Pinpointsmsvoicev2Pool#self_managed_opt_outs_enabled}

---

##### `SharedRoutesEnabled`<sup>Optional</sup> <a name="SharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled"></a>

```csharp
public bool|IResolvable SharedRoutesEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether shared routes are enabled for the pool.

When `true`, messages may use shared phone numbers or sender IDs in countries that allow it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#shared_routes_enabled Pinpointsmsvoicev2Pool#shared_routes_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts"></a>

```csharp
public Pinpointsmsvoicev2PoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#timeouts Pinpointsmsvoicev2Pool#timeouts}

---

##### `TwoWayChannelArn`<sup>Optional</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn"></a>

```csharp
public string TwoWayChannelArn { get; set; }
```

- *Type:* string

ARN of the two-way channel that receives inbound messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_arn Pinpointsmsvoicev2Pool#two_way_channel_arn}

---

##### `TwoWayChannelRole`<sup>Optional</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole"></a>

```csharp
public string TwoWayChannelRole { get; set; }
```

- *Type:* string

ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_role Pinpointsmsvoicev2Pool#two_way_channel_role}

---

##### `TwoWayEnabled`<sup>Optional</sup> <a name="TwoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled"></a>

```csharp
public bool|IResolvable TwoWayEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether inbound message reception is enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#two_way_enabled Pinpointsmsvoicev2Pool#two_way_enabled}

---

### Pinpointsmsvoicev2PoolTimeouts <a name="Pinpointsmsvoicev2PoolTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2PoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#create Pinpointsmsvoicev2Pool#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#delete Pinpointsmsvoicev2Pool#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/pinpointsmsvoicev2_pool#update Pinpointsmsvoicev2Pool#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2PoolTimeoutsOutputReference <a name="Pinpointsmsvoicev2PoolTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2PoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Pinpointsmsvoicev2PoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---



