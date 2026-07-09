# `gameliftFleet` Submodule <a name="`gameliftFleet` Submodule" id="@cdktn/provider-aws.gameliftFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftFleet <a name="GameliftFleet" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet aws_gamelift_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleet(Construct Scope, string Id, GameliftFleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig">GameliftFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig">GameliftFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration">PutCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission">PutEc2InboundPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy">PutResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration">PutRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetBuildId">ResetBuildId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetCertificateConfiguration">ResetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetEc2InboundPermission">ResetEc2InboundPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetFleetType">ResetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetInstanceRoleArn">ResetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetMetricGroups">ResetMetricGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy">ResetNewGameSessionProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy">ResetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetRuntimeConfiguration">ResetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetScriptId">ResetScriptId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateConfiguration` <a name="PutCertificateConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration"></a>

```csharp
private void PutCertificateConfiguration(GameliftFleetCertificateConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putCertificateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `PutEc2InboundPermission` <a name="PutEc2InboundPermission" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission"></a>

```csharp
private void PutEc2InboundPermission(IResolvable|GameliftFleetEc2InboundPermission[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putEc2InboundPermission.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>[]

---

##### `PutResourceCreationLimitPolicy` <a name="PutResourceCreationLimitPolicy" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy"></a>

```csharp
private void PutResourceCreationLimitPolicy(GameliftFleetResourceCreationLimitPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `PutRuntimeConfiguration` <a name="PutRuntimeConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration"></a>

```csharp
private void PutRuntimeConfiguration(GameliftFleetRuntimeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putTimeouts"></a>

```csharp
private void PutTimeouts(GameliftFleetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>

---

##### `ResetBuildId` <a name="ResetBuildId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetBuildId"></a>

```csharp
private void ResetBuildId()
```

##### `ResetCertificateConfiguration` <a name="ResetCertificateConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetCertificateConfiguration"></a>

```csharp
private void ResetCertificateConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEc2InboundPermission` <a name="ResetEc2InboundPermission" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetEc2InboundPermission"></a>

```csharp
private void ResetEc2InboundPermission()
```

##### `ResetFleetType` <a name="ResetFleetType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetFleetType"></a>

```csharp
private void ResetFleetType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceRoleArn` <a name="ResetInstanceRoleArn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetInstanceRoleArn"></a>

```csharp
private void ResetInstanceRoleArn()
```

##### `ResetMetricGroups` <a name="ResetMetricGroups" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetMetricGroups"></a>

```csharp
private void ResetMetricGroups()
```

##### `ResetNewGameSessionProtectionPolicy` <a name="ResetNewGameSessionProtectionPolicy" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy"></a>

```csharp
private void ResetNewGameSessionProtectionPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceCreationLimitPolicy` <a name="ResetResourceCreationLimitPolicy" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy"></a>

```csharp
private void ResetResourceCreationLimitPolicy()
```

##### `ResetRuntimeConfiguration` <a name="ResetRuntimeConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetRuntimeConfiguration"></a>

```csharp
private void ResetRuntimeConfiguration()
```

##### `ResetScriptId` <a name="ResetScriptId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetScriptId"></a>

```csharp
private void ResetScriptId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GameliftFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GameliftFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GameliftFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

GameliftFleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftFleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GameliftFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.buildArn">BuildArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfiguration">CertificateConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermission">Ec2InboundPermission</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList">GameliftFleetEc2InboundPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.logPaths">LogPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy">ResourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.scriptArn">ScriptArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference">GameliftFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.buildIdInput">BuildIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfigurationInput">CertificateConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermissionInput">Ec2InboundPermissionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput">Ec2InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.fleetTypeInput">FleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArnInput">InstanceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.metricGroupsInput">MetricGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput">NewGameSessionProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput">ResourceCreationLimitPolicyInput</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput">RuntimeConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.scriptIdInput">ScriptIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.buildId">BuildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceType">Ec2InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.fleetType">FleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.metricGroups">MetricGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.scriptId">ScriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BuildArn`<sup>Required</sup> <a name="BuildArn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.buildArn"></a>

```csharp
public string BuildArn { get; }
```

- *Type:* string

---

##### `CertificateConfiguration`<sup>Required</sup> <a name="CertificateConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfiguration"></a>

```csharp
public GameliftFleetCertificateConfigurationOutputReference CertificateConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a>

---

##### `Ec2InboundPermission`<sup>Required</sup> <a name="Ec2InboundPermission" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermission"></a>

```csharp
public GameliftFleetEc2InboundPermissionList Ec2InboundPermission { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList">GameliftFleetEc2InboundPermissionList</a>

---

##### `LogPaths`<sup>Required</sup> <a name="LogPaths" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.logPaths"></a>

```csharp
public string[] LogPaths { get; }
```

- *Type:* string[]

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `ResourceCreationLimitPolicy`<sup>Required</sup> <a name="ResourceCreationLimitPolicy" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy"></a>

```csharp
public GameliftFleetResourceCreationLimitPolicyOutputReference ResourceCreationLimitPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a>

---

##### `RuntimeConfiguration`<sup>Required</sup> <a name="RuntimeConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfiguration"></a>

```csharp
public GameliftFleetRuntimeConfigurationOutputReference RuntimeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a>

---

##### `ScriptArn`<sup>Required</sup> <a name="ScriptArn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.scriptArn"></a>

```csharp
public string ScriptArn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.timeouts"></a>

```csharp
public GameliftFleetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference">GameliftFleetTimeoutsOutputReference</a>

---

##### `BuildIdInput`<sup>Optional</sup> <a name="BuildIdInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.buildIdInput"></a>

```csharp
public string BuildIdInput { get; }
```

- *Type:* string

---

##### `CertificateConfigurationInput`<sup>Optional</sup> <a name="CertificateConfigurationInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.certificateConfigurationInput"></a>

```csharp
public GameliftFleetCertificateConfiguration CertificateConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Ec2InboundPermissionInput`<sup>Optional</sup> <a name="Ec2InboundPermissionInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.ec2InboundPermissionInput"></a>

```csharp
public IResolvable|GameliftFleetEc2InboundPermission[] Ec2InboundPermissionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>[]

---

##### `Ec2InstanceTypeInput`<sup>Optional</sup> <a name="Ec2InstanceTypeInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput"></a>

```csharp
public string Ec2InstanceTypeInput { get; }
```

- *Type:* string

---

##### `FleetTypeInput`<sup>Optional</sup> <a name="FleetTypeInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.fleetTypeInput"></a>

```csharp
public string FleetTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceRoleArnInput`<sup>Optional</sup> <a name="InstanceRoleArnInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArnInput"></a>

```csharp
public string InstanceRoleArnInput { get; }
```

- *Type:* string

---

##### `MetricGroupsInput`<sup>Optional</sup> <a name="MetricGroupsInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.metricGroupsInput"></a>

```csharp
public string[] MetricGroupsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NewGameSessionProtectionPolicyInput`<sup>Optional</sup> <a name="NewGameSessionProtectionPolicyInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput"></a>

```csharp
public string NewGameSessionProtectionPolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceCreationLimitPolicyInput`<sup>Optional</sup> <a name="ResourceCreationLimitPolicyInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput"></a>

```csharp
public GameliftFleetResourceCreationLimitPolicy ResourceCreationLimitPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `RuntimeConfigurationInput`<sup>Optional</sup> <a name="RuntimeConfigurationInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput"></a>

```csharp
public GameliftFleetRuntimeConfiguration RuntimeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `ScriptIdInput`<sup>Optional</sup> <a name="ScriptIdInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.scriptIdInput"></a>

```csharp
public string ScriptIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.timeoutsInput"></a>

```csharp
public IResolvable|GameliftFleetTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.buildId"></a>

```csharp
public string BuildId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Ec2InstanceType`<sup>Required</sup> <a name="Ec2InstanceType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.ec2InstanceType"></a>

```csharp
public string Ec2InstanceType { get; }
```

- *Type:* string

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.fleetType"></a>

```csharp
public string FleetType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceRoleArn`<sup>Required</sup> <a name="InstanceRoleArn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.instanceRoleArn"></a>

```csharp
public string InstanceRoleArn { get; }
```

- *Type:* string

---

##### `MetricGroups`<sup>Required</sup> <a name="MetricGroups" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.metricGroups"></a>

```csharp
public string[] MetricGroups { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NewGameSessionProtectionPolicy`<sup>Required</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy"></a>

```csharp
public string NewGameSessionProtectionPolicy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.scriptId"></a>

```csharp
public string ScriptId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftFleetCertificateConfiguration <a name="GameliftFleetCertificateConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetCertificateConfiguration {
    string CertificateType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType">CertificateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}. |

---

##### `CertificateType`<sup>Optional</sup> <a name="CertificateType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType"></a>

```csharp
public string CertificateType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

### GameliftFleetConfig <a name="GameliftFleetConfig" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Ec2InstanceType,
    string Name,
    string BuildId = null,
    GameliftFleetCertificateConfiguration CertificateConfiguration = null,
    string Description = null,
    IResolvable|GameliftFleetEc2InboundPermission[] Ec2InboundPermission = null,
    string FleetType = null,
    string Id = null,
    string InstanceRoleArn = null,
    string[] MetricGroups = null,
    string NewGameSessionProtectionPolicy = null,
    string Region = null,
    GameliftFleetResourceCreationLimitPolicy ResourceCreationLimitPolicy = null,
    GameliftFleetRuntimeConfiguration RuntimeConfiguration = null,
    string ScriptId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    GameliftFleetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType">Ec2InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#name GameliftFleet#name}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.buildId">BuildId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration">CertificateConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | certificate_configuration block. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#description GameliftFleet#description}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermission">Ec2InboundPermission</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>[]</code> | ec2_inbound_permission block. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.fleetType">FleetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#id GameliftFleet#id}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.metricGroups">MetricGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy">ResourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | resource_creation_limit_policy block. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | runtime_configuration block. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.scriptId">ScriptId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#tags_all GameliftFleet#tags_all}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Ec2InstanceType`<sup>Required</sup> <a name="Ec2InstanceType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType"></a>

```csharp
public string Ec2InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#name GameliftFleet#name}.

---

##### `BuildId`<sup>Optional</sup> <a name="BuildId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.buildId"></a>

```csharp
public string BuildId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}.

---

##### `CertificateConfiguration`<sup>Optional</sup> <a name="CertificateConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration"></a>

```csharp
public GameliftFleetCertificateConfiguration CertificateConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

certificate_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#description GameliftFleet#description}.

---

##### `Ec2InboundPermission`<sup>Optional</sup> <a name="Ec2InboundPermission" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermission"></a>

```csharp
public IResolvable|GameliftFleetEc2InboundPermission[] Ec2InboundPermission { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>[]

ec2_inbound_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}

---

##### `FleetType`<sup>Optional</sup> <a name="FleetType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.fleetType"></a>

```csharp
public string FleetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#id GameliftFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceRoleArn`<sup>Optional</sup> <a name="InstanceRoleArn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn"></a>

```csharp
public string InstanceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}.

---

##### `MetricGroups`<sup>Optional</sup> <a name="MetricGroups" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.metricGroups"></a>

```csharp
public string[] MetricGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}.

---

##### `NewGameSessionProtectionPolicy`<sup>Optional</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy"></a>

```csharp
public string NewGameSessionProtectionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#region GameliftFleet#region}

---

##### `ResourceCreationLimitPolicy`<sup>Optional</sup> <a name="ResourceCreationLimitPolicy" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy"></a>

```csharp
public GameliftFleetResourceCreationLimitPolicy ResourceCreationLimitPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

resource_creation_limit_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `RuntimeConfiguration`<sup>Optional</sup> <a name="RuntimeConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration"></a>

```csharp
public GameliftFleetRuntimeConfiguration RuntimeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

runtime_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `ScriptId`<sup>Optional</sup> <a name="ScriptId" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.scriptId"></a>

```csharp
public string ScriptId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#tags_all GameliftFleet#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetConfig.property.timeouts"></a>

```csharp
public GameliftFleetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#timeouts GameliftFleet#timeouts}

---

### GameliftFleetEc2InboundPermission <a name="GameliftFleetEc2InboundPermission" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetEc2InboundPermission {
    double FromPort,
    string IpRange,
    string Protocol,
    double ToPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#from_port GameliftFleet#from_port}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.ipRange">IpRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#ip_range GameliftFleet#ip_range}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#protocol GameliftFleet#protocol}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#to_port GameliftFleet#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#from_port GameliftFleet#from_port}.

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.ipRange"></a>

```csharp
public string IpRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#ip_range GameliftFleet#ip_range}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#protocol GameliftFleet#protocol}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#to_port GameliftFleet#to_port}.

---

### GameliftFleetResourceCreationLimitPolicy <a name="GameliftFleetResourceCreationLimitPolicy" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetResourceCreationLimitPolicy {
    double NewGameSessionsPerCreator = null,
    double PolicyPeriodInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}. |

---

##### `NewGameSessionsPerCreator`<sup>Optional</sup> <a name="NewGameSessionsPerCreator" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```csharp
public double NewGameSessionsPerCreator { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}.

---

##### `PolicyPeriodInMinutes`<sup>Optional</sup> <a name="PolicyPeriodInMinutes" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```csharp
public double PolicyPeriodInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}.

---

### GameliftFleetRuntimeConfiguration <a name="GameliftFleetRuntimeConfiguration" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetRuntimeConfiguration {
    double GameSessionActivationTimeoutSeconds = null,
    double MaxConcurrentGameSessionActivations = null,
    IResolvable|GameliftFleetRuntimeConfigurationServerProcess[] ServerProcess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds">GameSessionActivationTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations">MaxConcurrentGameSessionActivations</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcess">ServerProcess</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>[]</code> | server_process block. |

---

##### `GameSessionActivationTimeoutSeconds`<sup>Optional</sup> <a name="GameSessionActivationTimeoutSeconds" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

```csharp
public double GameSessionActivationTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}.

---

##### `MaxConcurrentGameSessionActivations`<sup>Optional</sup> <a name="MaxConcurrentGameSessionActivations" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

```csharp
public double MaxConcurrentGameSessionActivations { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}.

---

##### `ServerProcess`<sup>Optional</sup> <a name="ServerProcess" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcess"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfigurationServerProcess[] ServerProcess { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>[]

server_process block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#server_process GameliftFleet#server_process}

---

### GameliftFleetRuntimeConfigurationServerProcess <a name="GameliftFleetRuntimeConfigurationServerProcess" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetRuntimeConfigurationServerProcess {
    double ConcurrentExecutions,
    string LaunchPath,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.concurrentExecutions">ConcurrentExecutions</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.launchPath">LaunchPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#launch_path GameliftFleet#launch_path}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#parameters GameliftFleet#parameters}. |

---

##### `ConcurrentExecutions`<sup>Required</sup> <a name="ConcurrentExecutions" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.concurrentExecutions"></a>

```csharp
public double ConcurrentExecutions { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}.

---

##### `LaunchPath`<sup>Required</sup> <a name="LaunchPath" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.launchPath"></a>

```csharp
public string LaunchPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#launch_path GameliftFleet#launch_path}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#parameters GameliftFleet#parameters}.

---

### GameliftFleetTimeouts <a name="GameliftFleetTimeouts" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#create GameliftFleet#create}. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#delete GameliftFleet#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#create GameliftFleet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/gamelift_fleet#delete GameliftFleet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftFleetCertificateConfigurationOutputReference <a name="GameliftFleetCertificateConfigurationOutputReference" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetCertificateConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType">ResetCertificateType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateType` <a name="ResetCertificateType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType"></a>

```csharp
private void ResetCertificateType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput">CertificateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType">CertificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateTypeInput`<sup>Optional</sup> <a name="CertificateTypeInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput"></a>

```csharp
public string CertificateTypeInput { get; }
```

- *Type:* string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType"></a>

```csharp
public string CertificateType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue"></a>

```csharp
public GameliftFleetCertificateConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---


### GameliftFleetEc2InboundPermissionList <a name="GameliftFleetEc2InboundPermissionList" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetEc2InboundPermissionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get"></a>

```csharp
private GameliftFleetEc2InboundPermissionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionList.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetEc2InboundPermission[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>[]

---


### GameliftFleetEc2InboundPermissionOutputReference <a name="GameliftFleetEc2InboundPermissionOutputReference" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetEc2InboundPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRange">IpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRangeInput"></a>

```csharp
public string IpRangeInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.ipRange"></a>

```csharp
public string IpRange { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermissionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetEc2InboundPermission InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetEc2InboundPermission">GameliftFleetEc2InboundPermission</a>

---


### GameliftFleetResourceCreationLimitPolicyOutputReference <a name="GameliftFleetResourceCreationLimitPolicyOutputReference" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetResourceCreationLimitPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">ResetNewGameSessionsPerCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">ResetPolicyPeriodInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNewGameSessionsPerCreator` <a name="ResetNewGameSessionsPerCreator" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```csharp
private void ResetNewGameSessionsPerCreator()
```

##### `ResetPolicyPeriodInMinutes` <a name="ResetPolicyPeriodInMinutes" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```csharp
private void ResetPolicyPeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">NewGameSessionsPerCreatorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">PolicyPeriodInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewGameSessionsPerCreatorInput`<sup>Optional</sup> <a name="NewGameSessionsPerCreatorInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```csharp
public double NewGameSessionsPerCreatorInput { get; }
```

- *Type:* double

---

##### `PolicyPeriodInMinutesInput`<sup>Optional</sup> <a name="PolicyPeriodInMinutesInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```csharp
public double PolicyPeriodInMinutesInput { get; }
```

- *Type:* double

---

##### `NewGameSessionsPerCreator`<sup>Required</sup> <a name="NewGameSessionsPerCreator" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```csharp
public double NewGameSessionsPerCreator { get; }
```

- *Type:* double

---

##### `PolicyPeriodInMinutes`<sup>Required</sup> <a name="PolicyPeriodInMinutes" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```csharp
public double PolicyPeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue"></a>

```csharp
public GameliftFleetResourceCreationLimitPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---


### GameliftFleetRuntimeConfigurationOutputReference <a name="GameliftFleetRuntimeConfigurationOutputReference" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetRuntimeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess">PutServerProcess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds">ResetGameSessionActivationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations">ResetMaxConcurrentGameSessionActivations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcess">ResetServerProcess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerProcess` <a name="PutServerProcess" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess"></a>

```csharp
private void PutServerProcess(IResolvable|GameliftFleetRuntimeConfigurationServerProcess[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcess.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>[]

---

##### `ResetGameSessionActivationTimeoutSeconds` <a name="ResetGameSessionActivationTimeoutSeconds" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds"></a>

```csharp
private void ResetGameSessionActivationTimeoutSeconds()
```

##### `ResetMaxConcurrentGameSessionActivations` <a name="ResetMaxConcurrentGameSessionActivations" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations"></a>

```csharp
private void ResetMaxConcurrentGameSessionActivations()
```

##### `ResetServerProcess` <a name="ResetServerProcess" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcess"></a>

```csharp
private void ResetServerProcess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcess">ServerProcess</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList">GameliftFleetRuntimeConfigurationServerProcessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput">GameSessionActivationTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput">MaxConcurrentGameSessionActivationsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessInput">ServerProcessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds">GameSessionActivationTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations">MaxConcurrentGameSessionActivations</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerProcess`<sup>Required</sup> <a name="ServerProcess" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcess"></a>

```csharp
public GameliftFleetRuntimeConfigurationServerProcessList ServerProcess { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList">GameliftFleetRuntimeConfigurationServerProcessList</a>

---

##### `GameSessionActivationTimeoutSecondsInput`<sup>Optional</sup> <a name="GameSessionActivationTimeoutSecondsInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput"></a>

```csharp
public double GameSessionActivationTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentGameSessionActivationsInput`<sup>Optional</sup> <a name="MaxConcurrentGameSessionActivationsInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput"></a>

```csharp
public double MaxConcurrentGameSessionActivationsInput { get; }
```

- *Type:* double

---

##### `ServerProcessInput`<sup>Optional</sup> <a name="ServerProcessInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessInput"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfigurationServerProcess[] ServerProcessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>[]

---

##### `GameSessionActivationTimeoutSeconds`<sup>Required</sup> <a name="GameSessionActivationTimeoutSeconds" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds"></a>

```csharp
public double GameSessionActivationTimeoutSeconds { get; }
```

- *Type:* double

---

##### `MaxConcurrentGameSessionActivations`<sup>Required</sup> <a name="MaxConcurrentGameSessionActivations" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations"></a>

```csharp
public double MaxConcurrentGameSessionActivations { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue"></a>

```csharp
public GameliftFleetRuntimeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---


### GameliftFleetRuntimeConfigurationServerProcessList <a name="GameliftFleetRuntimeConfigurationServerProcessList" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetRuntimeConfigurationServerProcessList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get"></a>

```csharp
private GameliftFleetRuntimeConfigurationServerProcessOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessList.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfigurationServerProcess[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>[]

---


### GameliftFleetRuntimeConfigurationServerProcessOutputReference <a name="GameliftFleetRuntimeConfigurationServerProcessOutputReference" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetRuntimeConfigurationServerProcessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutionsInput">ConcurrentExecutionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPathInput">LaunchPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutions">ConcurrentExecutions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPath">LaunchPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConcurrentExecutionsInput`<sup>Optional</sup> <a name="ConcurrentExecutionsInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutionsInput"></a>

```csharp
public double ConcurrentExecutionsInput { get; }
```

- *Type:* double

---

##### `LaunchPathInput`<sup>Optional</sup> <a name="LaunchPathInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPathInput"></a>

```csharp
public string LaunchPathInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `ConcurrentExecutions`<sup>Required</sup> <a name="ConcurrentExecutions" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.concurrentExecutions"></a>

```csharp
public double ConcurrentExecutions { get; }
```

- *Type:* double

---

##### `LaunchPath`<sup>Required</sup> <a name="LaunchPath" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.launchPath"></a>

```csharp
public string LaunchPath { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfigurationServerProcess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcess">GameliftFleetRuntimeConfigurationServerProcess</a>

---


### GameliftFleetTimeoutsOutputReference <a name="GameliftFleetTimeoutsOutputReference" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new GameliftFleetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.gameliftFleet.GameliftFleetTimeouts">GameliftFleetTimeouts</a>

---



