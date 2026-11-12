# `lambdawebFunctionEndpoint` Submodule <a name="`lambdawebFunctionEndpoint` Submodule" id="@cdktn/provider-aws.lambdawebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdawebFunctionEndpoint <a name="LambdawebFunctionEndpoint" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint aws_lambdaweb_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpoint(Construct Scope, string Id, LambdawebFunctionEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig">LambdawebFunctionEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig">LambdawebFunctionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight">PutRevisionWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig">PutScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig">PutThrottleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetAutoDeploymentMode">ResetAutoDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRevisionWeight">ResetRevisionWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetScalingConfig">ResetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetThrottleConfig">ResetThrottleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRevisionWeight` <a name="PutRevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight"></a>

```csharp
private void PutRevisionWeight(IResolvable|LambdawebFunctionEndpointRevisionWeight[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putRevisionWeight.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]

---

##### `PutScalingConfig` <a name="PutScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig"></a>

```csharp
private void PutScalingConfig(IResolvable|LambdawebFunctionEndpointScalingConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putScalingConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]

---

##### `PutThrottleConfig` <a name="PutThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig"></a>

```csharp
private void PutThrottleConfig(IResolvable|LambdawebFunctionEndpointThrottleConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putThrottleConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(LambdawebFunctionEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

---

##### `ResetAutoDeploymentMode` <a name="ResetAutoDeploymentMode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetAutoDeploymentMode"></a>

```csharp
private void ResetAutoDeploymentMode()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetRevisionWeight` <a name="ResetRevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetRevisionWeight"></a>

```csharp
private void ResetRevisionWeight()
```

##### `ResetScalingConfig` <a name="ResetScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetScalingConfig"></a>

```csharp
private void ResetScalingConfig()
```

##### `ResetThrottleConfig` <a name="ResetThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetThrottleConfig"></a>

```csharp
private void ResetThrottleConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdawebFunctionEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdawebFunctionEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdawebFunctionEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdawebFunctionEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdawebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdawebFunctionEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdawebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdawebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionalDomainNames">RegionalDomainNames</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeight">RevisionWeight</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList">LambdawebFunctionEndpointRevisionWeightList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList">LambdawebFunctionEndpointScalingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfig">ThrottleConfig</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList">LambdawebFunctionEndpointThrottleConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference">LambdawebFunctionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentModeInput">AutoDeploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeightInput">RevisionWeightInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfigInput">ScalingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfigInput">ThrottleConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentMode">AutoDeploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `RegionalDomainNames`<sup>Required</sup> <a name="RegionalDomainNames" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionalDomainNames"></a>

```csharp
public StringMap RegionalDomainNames { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `RevisionWeight`<sup>Required</sup> <a name="RevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeight"></a>

```csharp
public LambdawebFunctionEndpointRevisionWeightList RevisionWeight { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList">LambdawebFunctionEndpointRevisionWeightList</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfig"></a>

```csharp
public LambdawebFunctionEndpointScalingConfigList ScalingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList">LambdawebFunctionEndpointScalingConfigList</a>

---

##### `ThrottleConfig`<sup>Required</sup> <a name="ThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfig"></a>

```csharp
public LambdawebFunctionEndpointThrottleConfigList ThrottleConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList">LambdawebFunctionEndpointThrottleConfigList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeouts"></a>

```csharp
public LambdawebFunctionEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference">LambdawebFunctionEndpointTimeoutsOutputReference</a>

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AutoDeploymentModeInput`<sup>Optional</sup> <a name="AutoDeploymentModeInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentModeInput"></a>

```csharp
public string AutoDeploymentModeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RevisionWeightInput`<sup>Optional</sup> <a name="RevisionWeightInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.revisionWeightInput"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointRevisionWeight[] RevisionWeightInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]

---

##### `ScalingConfigInput`<sup>Optional</sup> <a name="ScalingConfigInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.scalingConfigInput"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointScalingConfig[] ScalingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]

---

##### `ThrottleConfigInput`<sup>Optional</sup> <a name="ThrottleConfigInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.throttleConfigInput"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointThrottleConfig[] ThrottleConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AutoDeploymentMode`<sup>Required</sup> <a name="AutoDeploymentMode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.autoDeploymentMode"></a>

```csharp
public string AutoDeploymentMode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdawebFunctionEndpointConfig <a name="LambdawebFunctionEndpointConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AuthType,
    string EndpointName,
    string EndpointType,
    string FunctionName,
    string AutoDeploymentMode = null,
    string Description = null,
    string Region = null,
    string[] Regions = null,
    IResolvable|LambdawebFunctionEndpointRevisionWeight[] RevisionWeight = null,
    IResolvable|LambdawebFunctionEndpointScalingConfig[] ScalingConfig = null,
    IResolvable|LambdawebFunctionEndpointThrottleConfig[] ThrottleConfig = null,
    LambdawebFunctionEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointName">EndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.autoDeploymentMode">AutoDeploymentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.revisionWeight">RevisionWeight</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]</code> | revision_weight block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.scalingConfig">ScalingConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]</code> | scaling_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.throttleConfig">ThrottleConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]</code> | throttle_config block. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auth_type LambdawebFunctionEndpoint#auth_type}.

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_name LambdawebFunctionEndpoint#endpoint_name}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#endpoint_type LambdawebFunctionEndpoint#endpoint_type}.

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#function_name LambdawebFunctionEndpoint#function_name}.

---

##### `AutoDeploymentMode`<sup>Optional</sup> <a name="AutoDeploymentMode" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.autoDeploymentMode"></a>

```csharp
public string AutoDeploymentMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#auto_deployment_mode LambdawebFunctionEndpoint#auto_deployment_mode}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#description LambdawebFunctionEndpoint#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#region LambdawebFunctionEndpoint#region}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#regions LambdawebFunctionEndpoint#regions}.

---

##### `RevisionWeight`<sup>Optional</sup> <a name="RevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.revisionWeight"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointRevisionWeight[] RevisionWeight { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]

revision_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_weight LambdawebFunctionEndpoint#revision_weight}

---

##### `ScalingConfig`<sup>Optional</sup> <a name="ScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.scalingConfig"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointScalingConfig[] ScalingConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#scaling_config LambdawebFunctionEndpoint#scaling_config}

---

##### `ThrottleConfig`<sup>Optional</sup> <a name="ThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.throttleConfig"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointThrottleConfig[] ThrottleConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]

throttle_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#throttle_config LambdawebFunctionEndpoint#throttle_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointConfig.property.timeouts"></a>

```csharp
public LambdawebFunctionEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#timeouts LambdawebFunctionEndpoint#timeouts}

---

### LambdawebFunctionEndpointRevisionWeight <a name="LambdawebFunctionEndpointRevisionWeight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointRevisionWeight {
    string RevisionId,
    double Weight
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.revisionId">RevisionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_id LambdawebFunctionEndpoint#revision_id}. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#weight LambdawebFunctionEndpoint#weight}. |

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.revisionId"></a>

```csharp
public string RevisionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#revision_id LambdawebFunctionEndpoint#revision_id}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#weight LambdawebFunctionEndpoint#weight}.

---

### LambdawebFunctionEndpointScalingConfig <a name="LambdawebFunctionEndpointScalingConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointScalingConfig {
    double MaxEnvironments
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.property.maxEnvironments">MaxEnvironments</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#max_environments LambdawebFunctionEndpoint#max_environments}. |

---

##### `MaxEnvironments`<sup>Required</sup> <a name="MaxEnvironments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig.property.maxEnvironments"></a>

```csharp
public double MaxEnvironments { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#max_environments LambdawebFunctionEndpoint#max_environments}.

---

### LambdawebFunctionEndpointThrottleConfig <a name="LambdawebFunctionEndpointThrottleConfig" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointThrottleConfig {
    double RateLimit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.property.rateLimit">RateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#rate_limit LambdawebFunctionEndpoint#rate_limit}. |

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig.property.rateLimit"></a>

```csharp
public double RateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#rate_limit LambdawebFunctionEndpoint#rate_limit}.

---

### LambdawebFunctionEndpointTimeouts <a name="LambdawebFunctionEndpointTimeouts" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#create LambdawebFunctionEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#delete LambdawebFunctionEndpoint#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/lambdaweb_function_endpoint#update LambdawebFunctionEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdawebFunctionEndpointRevisionWeightList <a name="LambdawebFunctionEndpointRevisionWeightList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointRevisionWeightList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get"></a>

```csharp
private LambdawebFunctionEndpointRevisionWeightOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightList.property.internalValue"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointRevisionWeight[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>[]

---


### LambdawebFunctionEndpointRevisionWeightOutputReference <a name="LambdawebFunctionEndpointRevisionWeightOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointRevisionWeightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionIdInput">RevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionId">RevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionIdInput`<sup>Optional</sup> <a name="RevisionIdInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionIdInput"></a>

```csharp
public string RevisionIdInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.revisionId"></a>

```csharp
public string RevisionId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeightOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointRevisionWeight InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointRevisionWeight">LambdawebFunctionEndpointRevisionWeight</a>

---


### LambdawebFunctionEndpointScalingConfigList <a name="LambdawebFunctionEndpointScalingConfigList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointScalingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get"></a>

```csharp
private LambdawebFunctionEndpointScalingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigList.property.internalValue"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointScalingConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>[]

---


### LambdawebFunctionEndpointScalingConfigOutputReference <a name="LambdawebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointScalingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput">MaxEnvironmentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">MaxEnvironments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxEnvironmentsInput`<sup>Optional</sup> <a name="MaxEnvironmentsInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput"></a>

```csharp
public double MaxEnvironmentsInput { get; }
```

- *Type:* double

---

##### `MaxEnvironments`<sup>Required</sup> <a name="MaxEnvironments" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```csharp
public double MaxEnvironments { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointScalingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointScalingConfig">LambdawebFunctionEndpointScalingConfig</a>

---


### LambdawebFunctionEndpointThrottleConfigList <a name="LambdawebFunctionEndpointThrottleConfigList" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointThrottleConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get"></a>

```csharp
private LambdawebFunctionEndpointThrottleConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigList.property.internalValue"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointThrottleConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>[]

---


### LambdawebFunctionEndpointThrottleConfigOutputReference <a name="LambdawebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointThrottleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput"></a>

```csharp
public double RateLimitInput { get; }
```

- *Type:* double

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointThrottleConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointThrottleConfig">LambdawebFunctionEndpointThrottleConfig</a>

---


### LambdawebFunctionEndpointTimeoutsOutputReference <a name="LambdawebFunctionEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdawebFunctionEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdawebFunctionEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdawebFunctionEndpoint.LambdawebFunctionEndpointTimeouts">LambdawebFunctionEndpointTimeouts</a>

---



