# `bedrockModelInvocationJob` Submodule <a name="`bedrockModelInvocationJob` Submodule" id="@cdktn/provider-aws.bedrockModelInvocationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockModelInvocationJob <a name="BedrockModelInvocationJob" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job aws_bedrock_model_invocation_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJob(Construct Scope, string Id, BedrockModelInvocationJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig">BedrockModelInvocationJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig">BedrockModelInvocationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig">PutOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetInputDataConfig">ResetInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOutputDataConfig">ResetOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetSkipDestroy">ResetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeoutDurationInHours">ResetTimeoutDurationInHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig"></a>

```csharp
private void PutInputDataConfig(IResolvable|BedrockModelInvocationJobInputDataConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putInputDataConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]

---

##### `PutOutputDataConfig` <a name="PutOutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig"></a>

```csharp
private void PutOutputDataConfig(IResolvable|BedrockModelInvocationJobOutputDataConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putOutputDataConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockModelInvocationJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig"></a>

```csharp
private void PutVpcConfig(IResolvable|BedrockModelInvocationJobVpcConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.putVpcConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]

---

##### `ResetInputDataConfig` <a name="ResetInputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetInputDataConfig"></a>

```csharp
private void ResetInputDataConfig()
```

##### `ResetOutputDataConfig` <a name="ResetOutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetOutputDataConfig"></a>

```csharp
private void ResetOutputDataConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSkipDestroy` <a name="ResetSkipDestroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetSkipDestroy"></a>

```csharp
private void ResetSkipDestroy()
```

##### `ResetTimeoutDurationInHours` <a name="ResetTimeoutDurationInHours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeoutDurationInHours"></a>

```csharp
private void ResetTimeoutDurationInHours()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockModelInvocationJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockModelInvocationJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockModelInvocationJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockModelInvocationJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockModelInvocationJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockModelInvocationJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockModelInvocationJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockModelInvocationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockModelInvocationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.errorRecordCount">ErrorRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList">BedrockModelInvocationJobInputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobArn">JobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobExpirationTime">JobExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelInvocationType">ModelInvocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList">BedrockModelInvocationJobOutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.processedRecordCount">ProcessedRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.submitTime">SubmitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.successRecordCount">SuccessRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference">BedrockModelInvocationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.totalRecordCount">TotalRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList">BedrockModelInvocationJobVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfigInput">OutputDataConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroyInput">SkipDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHoursInput">TimeoutDurationInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroy">SkipDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHours">TimeoutDurationInHours</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ErrorRecordCount`<sup>Required</sup> <a name="ErrorRecordCount" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.errorRecordCount"></a>

```csharp
public double ErrorRecordCount { get; }
```

- *Type:* double

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfig"></a>

```csharp
public BedrockModelInvocationJobInputDataConfigList InputDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList">BedrockModelInvocationJobInputDataConfigList</a>

---

##### `JobArn`<sup>Required</sup> <a name="JobArn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobArn"></a>

```csharp
public string JobArn { get; }
```

- *Type:* string

---

##### `JobExpirationTime`<sup>Required</sup> <a name="JobExpirationTime" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobExpirationTime"></a>

```csharp
public string JobExpirationTime { get; }
```

- *Type:* string

---

##### `ModelInvocationType`<sup>Required</sup> <a name="ModelInvocationType" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelInvocationType"></a>

```csharp
public string ModelInvocationType { get; }
```

- *Type:* string

---

##### `OutputDataConfig`<sup>Required</sup> <a name="OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfig"></a>

```csharp
public BedrockModelInvocationJobOutputDataConfigList OutputDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList">BedrockModelInvocationJobOutputDataConfigList</a>

---

##### `ProcessedRecordCount`<sup>Required</sup> <a name="ProcessedRecordCount" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.processedRecordCount"></a>

```csharp
public double ProcessedRecordCount { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubmitTime`<sup>Required</sup> <a name="SubmitTime" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.submitTime"></a>

```csharp
public string SubmitTime { get; }
```

- *Type:* string

---

##### `SuccessRecordCount`<sup>Required</sup> <a name="SuccessRecordCount" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.successRecordCount"></a>

```csharp
public double SuccessRecordCount { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeouts"></a>

```csharp
public BedrockModelInvocationJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference">BedrockModelInvocationJobTimeoutsOutputReference</a>

---

##### `TotalRecordCount`<sup>Required</sup> <a name="TotalRecordCount" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.totalRecordCount"></a>

```csharp
public double TotalRecordCount { get; }
```

- *Type:* double

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfig"></a>

```csharp
public BedrockModelInvocationJobVpcConfigList VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList">BedrockModelInvocationJobVpcConfigList</a>

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.inputDataConfigInput"></a>

```csharp
public IResolvable|BedrockModelInvocationJobInputDataConfig[] InputDataConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `OutputDataConfigInput`<sup>Optional</sup> <a name="OutputDataConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.outputDataConfigInput"></a>

```csharp
public IResolvable|BedrockModelInvocationJobOutputDataConfig[] OutputDataConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SkipDestroyInput`<sup>Optional</sup> <a name="SkipDestroyInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroyInput"></a>

```csharp
public bool|IResolvable SkipDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutDurationInHoursInput`<sup>Optional</sup> <a name="TimeoutDurationInHoursInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHoursInput"></a>

```csharp
public double TimeoutDurationInHoursInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutsInput"></a>

```csharp
public IResolvable|BedrockModelInvocationJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.vpcConfigInput"></a>

```csharp
public IResolvable|BedrockModelInvocationJobVpcConfig[] VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SkipDestroy`<sup>Required</sup> <a name="SkipDestroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.skipDestroy"></a>

```csharp
public bool|IResolvable SkipDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutDurationInHours`<sup>Required</sup> <a name="TimeoutDurationInHours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.timeoutDurationInHours"></a>

```csharp
public double TimeoutDurationInHours { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockModelInvocationJobConfig <a name="BedrockModelInvocationJobConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string JobName,
    string ModelId,
    string RoleArn,
    IResolvable|BedrockModelInvocationJobInputDataConfig[] InputDataConfig = null,
    IResolvable|BedrockModelInvocationJobOutputDataConfig[] OutputDataConfig = null,
    string Region = null,
    bool|IResolvable SkipDestroy = null,
    double TimeoutDurationInHours = null,
    BedrockModelInvocationJobTimeouts Timeouts = null,
    IResolvable|BedrockModelInvocationJobVpcConfig[] VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.jobName">JobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.inputDataConfig">InputDataConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]</code> | input_data_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.outputDataConfig">OutputDataConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]</code> | output_data_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.skipDestroy">SkipDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeoutDurationInHours">TimeoutDurationInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.vpcConfig">VpcConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]</code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#job_name BedrockModelInvocationJob#job_name}.

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#model_id BedrockModelInvocationJob#model_id}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#role_arn BedrockModelInvocationJob#role_arn}.

---

##### `InputDataConfig`<sup>Optional</sup> <a name="InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.inputDataConfig"></a>

```csharp
public IResolvable|BedrockModelInvocationJobInputDataConfig[] InputDataConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#input_data_config BedrockModelInvocationJob#input_data_config}

---

##### `OutputDataConfig`<sup>Optional</sup> <a name="OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.outputDataConfig"></a>

```csharp
public IResolvable|BedrockModelInvocationJobOutputDataConfig[] OutputDataConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]

output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#output_data_config BedrockModelInvocationJob#output_data_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#region BedrockModelInvocationJob#region}

---

##### `SkipDestroy`<sup>Optional</sup> <a name="SkipDestroy" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.skipDestroy"></a>

```csharp
public bool|IResolvable SkipDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#skip_destroy BedrockModelInvocationJob#skip_destroy}.

---

##### `TimeoutDurationInHours`<sup>Optional</sup> <a name="TimeoutDurationInHours" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeoutDurationInHours"></a>

```csharp
public double TimeoutDurationInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeout_duration_in_hours BedrockModelInvocationJob#timeout_duration_in_hours}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.timeouts"></a>

```csharp
public BedrockModelInvocationJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#timeouts BedrockModelInvocationJob#timeouts}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobConfig.property.vpcConfig"></a>

```csharp
public IResolvable|BedrockModelInvocationJobVpcConfig[] VpcConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#vpc_config BedrockModelInvocationJob#vpc_config}

---

### BedrockModelInvocationJobInputDataConfig <a name="BedrockModelInvocationJobInputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobInputDataConfig {
    IResolvable|BedrockModelInvocationJobInputDataConfigS3InputDataConfig[] S3InputDataConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.property.s3InputDataConfig">S3InputDataConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]</code> | s3_input_data_config block. |

---

##### `S3InputDataConfig`<sup>Optional</sup> <a name="S3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig.property.s3InputDataConfig"></a>

```csharp
public IResolvable|BedrockModelInvocationJobInputDataConfigS3InputDataConfig[] S3InputDataConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]

s3_input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_input_data_config BedrockModelInvocationJob#s3_input_data_config}

---

### BedrockModelInvocationJobInputDataConfigS3InputDataConfig <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobInputDataConfigS3InputDataConfig {
    string S3Uri,
    string S3BucketOwner = null,
    string S3InputFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3InputFormat">S3InputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_input_format BedrockModelInvocationJob#s3_input_format}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}.

---

##### `S3BucketOwner`<sup>Optional</sup> <a name="S3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}.

---

##### `S3InputFormat`<sup>Optional</sup> <a name="S3InputFormat" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig.property.s3InputFormat"></a>

```csharp
public string S3InputFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_input_format BedrockModelInvocationJob#s3_input_format}.

---

### BedrockModelInvocationJobOutputDataConfig <a name="BedrockModelInvocationJobOutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobOutputDataConfig {
    IResolvable|BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[] S3OutputDataConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.property.s3OutputDataConfig">S3OutputDataConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]</code> | s3_output_data_config block. |

---

##### `S3OutputDataConfig`<sup>Optional</sup> <a name="S3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig.property.s3OutputDataConfig"></a>

```csharp
public IResolvable|BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[] S3OutputDataConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]

s3_output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_output_data_config BedrockModelInvocationJob#s3_output_data_config}

---

### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig {
    string S3Uri,
    string S3BucketOwner = null,
    string S3EncryptionKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3EncryptionKeyId">S3EncryptionKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_encryption_key_id BedrockModelInvocationJob#s3_encryption_key_id}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_uri BedrockModelInvocationJob#s3_uri}.

---

##### `S3BucketOwner`<sup>Optional</sup> <a name="S3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_bucket_owner BedrockModelInvocationJob#s3_bucket_owner}.

---

##### `S3EncryptionKeyId`<sup>Optional</sup> <a name="S3EncryptionKeyId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig.property.s3EncryptionKeyId"></a>

```csharp
public string S3EncryptionKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#s3_encryption_key_id BedrockModelInvocationJob#s3_encryption_key_id}.

---

### BedrockModelInvocationJobTimeouts <a name="BedrockModelInvocationJobTimeouts" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#create BedrockModelInvocationJob#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#delete BedrockModelInvocationJob#delete}

---

### BedrockModelInvocationJobVpcConfig <a name="BedrockModelInvocationJobVpcConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobVpcConfig {
    string[] SecurityGroupIds,
    string[] SubnetIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#security_group_ids BedrockModelInvocationJob#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#subnet_ids BedrockModelInvocationJob#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#security_group_ids BedrockModelInvocationJob#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/bedrock_model_invocation_job#subnet_ids BedrockModelInvocationJob#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockModelInvocationJobInputDataConfigList <a name="BedrockModelInvocationJobInputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobInputDataConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get"></a>

```csharp
private BedrockModelInvocationJobInputDataConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobInputDataConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>[]

---


### BedrockModelInvocationJobInputDataConfigOutputReference <a name="BedrockModelInvocationJobInputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobInputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig">PutS3InputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resetS3InputDataConfig">ResetS3InputDataConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3InputDataConfig` <a name="PutS3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig"></a>

```csharp
private void PutS3InputDataConfig(IResolvable|BedrockModelInvocationJobInputDataConfigS3InputDataConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.putS3InputDataConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]

---

##### `ResetS3InputDataConfig` <a name="ResetS3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.resetS3InputDataConfig"></a>

```csharp
private void ResetS3InputDataConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfig">S3InputDataConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList">BedrockModelInvocationJobInputDataConfigS3InputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfigInput">S3InputDataConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3InputDataConfig`<sup>Required</sup> <a name="S3InputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfig"></a>

```csharp
public BedrockModelInvocationJobInputDataConfigS3InputDataConfigList S3InputDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList">BedrockModelInvocationJobInputDataConfigS3InputDataConfigList</a>

---

##### `S3InputDataConfigInput`<sup>Optional</sup> <a name="S3InputDataConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.s3InputDataConfigInput"></a>

```csharp
public IResolvable|BedrockModelInvocationJobInputDataConfigS3InputDataConfig[] S3InputDataConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobInputDataConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfig">BedrockModelInvocationJobInputDataConfig</a>

---


### BedrockModelInvocationJobInputDataConfigS3InputDataConfigList <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobInputDataConfigS3InputDataConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get"></a>

```csharp
private BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobInputDataConfigS3InputDataConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>[]

---


### BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference <a name="BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3BucketOwner">ResetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3InputFormat">ResetS3InputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3BucketOwner` <a name="ResetS3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3BucketOwner"></a>

```csharp
private void ResetS3BucketOwner()
```

##### `ResetS3InputFormat` <a name="ResetS3InputFormat" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.resetS3InputFormat"></a>

```csharp
private void ResetS3InputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormatInput">S3InputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormat">S3InputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwnerInput"></a>

```csharp
public string S3BucketOwnerInput { get; }
```

- *Type:* string

---

##### `S3InputFormatInput`<sup>Optional</sup> <a name="S3InputFormatInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormatInput"></a>

```csharp
public string S3InputFormatInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; }
```

- *Type:* string

---

##### `S3InputFormat`<sup>Required</sup> <a name="S3InputFormat" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3InputFormat"></a>

```csharp
public string S3InputFormat { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobInputDataConfigS3InputDataConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobInputDataConfigS3InputDataConfig">BedrockModelInvocationJobInputDataConfigS3InputDataConfig</a>

---


### BedrockModelInvocationJobOutputDataConfigList <a name="BedrockModelInvocationJobOutputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobOutputDataConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get"></a>

```csharp
private BedrockModelInvocationJobOutputDataConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobOutputDataConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>[]

---


### BedrockModelInvocationJobOutputDataConfigOutputReference <a name="BedrockModelInvocationJobOutputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobOutputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig">PutS3OutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resetS3OutputDataConfig">ResetS3OutputDataConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3OutputDataConfig` <a name="PutS3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig"></a>

```csharp
private void PutS3OutputDataConfig(IResolvable|BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.putS3OutputDataConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]

---

##### `ResetS3OutputDataConfig` <a name="ResetS3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.resetS3OutputDataConfig"></a>

```csharp
private void ResetS3OutputDataConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfig">S3OutputDataConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfigInput">S3OutputDataConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3OutputDataConfig`<sup>Required</sup> <a name="S3OutputDataConfig" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfig"></a>

```csharp
public BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList S3OutputDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList</a>

---

##### `S3OutputDataConfigInput`<sup>Optional</sup> <a name="S3OutputDataConfigInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.s3OutputDataConfigInput"></a>

```csharp
public IResolvable|BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[] S3OutputDataConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobOutputDataConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfig">BedrockModelInvocationJobOutputDataConfig</a>

---


### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get"></a>

```csharp
private BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>[]

---


### BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference <a name="BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3BucketOwner">ResetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3EncryptionKeyId">ResetS3EncryptionKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3BucketOwner` <a name="ResetS3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3BucketOwner"></a>

```csharp
private void ResetS3BucketOwner()
```

##### `ResetS3EncryptionKeyId` <a name="ResetS3EncryptionKeyId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.resetS3EncryptionKeyId"></a>

```csharp
private void ResetS3EncryptionKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyIdInput">S3EncryptionKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyId">S3EncryptionKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwnerInput"></a>

```csharp
public string S3BucketOwnerInput { get; }
```

- *Type:* string

---

##### `S3EncryptionKeyIdInput`<sup>Optional</sup> <a name="S3EncryptionKeyIdInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyIdInput"></a>

```csharp
public string S3EncryptionKeyIdInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; }
```

- *Type:* string

---

##### `S3EncryptionKeyId`<sup>Required</sup> <a name="S3EncryptionKeyId" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3EncryptionKeyId"></a>

```csharp
public string S3EncryptionKeyId { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig">BedrockModelInvocationJobOutputDataConfigS3OutputDataConfig</a>

---


### BedrockModelInvocationJobTimeoutsOutputReference <a name="BedrockModelInvocationJobTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobTimeouts">BedrockModelInvocationJobTimeouts</a>

---


### BedrockModelInvocationJobVpcConfigList <a name="BedrockModelInvocationJobVpcConfigList" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobVpcConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get"></a>

```csharp
private BedrockModelInvocationJobVpcConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobVpcConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>[]

---


### BedrockModelInvocationJobVpcConfigOutputReference <a name="BedrockModelInvocationJobVpcConfigOutputReference" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockModelInvocationJobVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockModelInvocationJobVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockModelInvocationJob.BedrockModelInvocationJobVpcConfig">BedrockModelInvocationJobVpcConfig</a>

---



