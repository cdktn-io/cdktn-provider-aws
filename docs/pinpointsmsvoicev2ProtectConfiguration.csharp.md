# `pinpointsmsvoicev2ProtectConfiguration` Submodule <a name="`pinpointsmsvoicev2ProtectConfiguration` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2ProtectConfiguration <a name="Pinpointsmsvoicev2ProtectConfiguration" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration aws_pinpointsmsvoicev2_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2ProtectConfiguration(Construct Scope, string Id, Pinpointsmsvoicev2ProtectConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig">Pinpointsmsvoicev2ProtectConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig">Pinpointsmsvoicev2ProtectConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetMmsCountryRules">ResetMmsCountryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRcsCountryRules">ResetRcsCountryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetSmsCountryRules">ResetSmsCountryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetVoiceCountryRules">ResetVoiceCountryRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetMmsCountryRules` <a name="ResetMmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetMmsCountryRules"></a>

```csharp
private void ResetMmsCountryRules()
```

##### `ResetRcsCountryRules` <a name="ResetRcsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRcsCountryRules"></a>

```csharp
private void ResetRcsCountryRules()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSmsCountryRules` <a name="ResetSmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetSmsCountryRules"></a>

```csharp
private void ResetSmsCountryRules()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVoiceCountryRules` <a name="ResetVoiceCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetVoiceCountryRules"></a>

```csharp
private void ResetVoiceCountryRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2ProtectConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2ProtectConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2ProtectConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Pinpointsmsvoicev2ProtectConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2ProtectConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2ProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2ProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.accountDefault">AccountDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRulesInput">MmsCountryRulesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRulesInput">RcsCountryRulesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRulesInput">SmsCountryRulesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRulesInput">VoiceCountryRulesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRules">MmsCountryRules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRules">RcsCountryRules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRules">SmsCountryRules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRules">VoiceCountryRules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountDefault`<sup>Required</sup> <a name="AccountDefault" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.accountDefault"></a>

```csharp
public IResolvable AccountDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MmsCountryRulesInput`<sup>Optional</sup> <a name="MmsCountryRulesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRulesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MmsCountryRulesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RcsCountryRulesInput`<sup>Optional</sup> <a name="RcsCountryRulesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRulesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RcsCountryRulesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SmsCountryRulesInput`<sup>Optional</sup> <a name="SmsCountryRulesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRulesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SmsCountryRulesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VoiceCountryRulesInput`<sup>Optional</sup> <a name="VoiceCountryRulesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRulesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VoiceCountryRulesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MmsCountryRules`<sup>Required</sup> <a name="MmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MmsCountryRules { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RcsCountryRules`<sup>Required</sup> <a name="RcsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RcsCountryRules { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SmsCountryRules`<sup>Required</sup> <a name="SmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SmsCountryRules { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VoiceCountryRules`<sup>Required</sup> <a name="VoiceCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VoiceCountryRules { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2ProtectConfigurationConfig <a name="Pinpointsmsvoicev2ProtectConfigurationConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Pinpointsmsvoicev2ProtectConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable DeletionProtectionEnabled = null,
    System.Collections.Generic.IDictionary<string, string> MmsCountryRules = null,
    System.Collections.Generic.IDictionary<string, string> RcsCountryRules = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> SmsCountryRules = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> VoiceCountryRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.mmsCountryRules">MmsCountryRules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.rcsCountryRules">RcsCountryRules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.smsCountryRules">SmsCountryRules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.voiceCountryRules">VoiceCountryRules</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}.

---

##### `MmsCountryRules`<sup>Optional</sup> <a name="MmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.mmsCountryRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MmsCountryRules { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}.

---

##### `RcsCountryRules`<sup>Optional</sup> <a name="RcsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.rcsCountryRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RcsCountryRules { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#region Pinpointsmsvoicev2ProtectConfiguration#region}

---

##### `SmsCountryRules`<sup>Optional</sup> <a name="SmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.smsCountryRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SmsCountryRules { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}.

---

##### `VoiceCountryRules`<sup>Optional</sup> <a name="VoiceCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.voiceCountryRules"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VoiceCountryRules { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}.

---



