# `lambdamicrovmsMicrovm` Submodule <a name="`lambdamicrovmsMicrovm` Submodule" id="@cdktn/provider-aws.lambdamicrovmsMicrovm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsMicrovm <a name="LambdamicrovmsMicrovm" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm aws_lambdamicrovms_microvm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovm(Construct Scope, string Id, LambdamicrovmsMicrovmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig">LambdamicrovmsMicrovmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig">LambdamicrovmsMicrovmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy">PutIdlePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors">ResetEgressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy">ResetIdlePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion">ResetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors">ResetIngressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds">ResetMaximumDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload">ResetRunHookPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdlePolicy` <a name="PutIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy"></a>

```csharp
private void PutIdlePolicy(IResolvable|LambdamicrovmsMicrovmIdlePolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging"></a>

```csharp
private void PutLogging(IResolvable|LambdamicrovmsMicrovmLogging[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts"></a>

```csharp
private void PutTimeouts(LambdamicrovmsMicrovmTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---

##### `ResetEgressNetworkConnectors` <a name="ResetEgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors"></a>

```csharp
private void ResetEgressNetworkConnectors()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetIdlePolicy` <a name="ResetIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy"></a>

```csharp
private void ResetIdlePolicy()
```

##### `ResetImageVersion` <a name="ResetImageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion"></a>

```csharp
private void ResetImageVersion()
```

##### `ResetIngressNetworkConnectors` <a name="ResetIngressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors"></a>

```csharp
private void ResetIngressNetworkConnectors()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetMaximumDurationInSeconds` <a name="ResetMaximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds"></a>

```csharp
private void ResetMaximumDurationInSeconds()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRunHookPayload` <a name="ResetRunHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload"></a>

```csharp
private void ResetRunHookPayload()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdamicrovmsMicrovm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdamicrovmsMicrovm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdamicrovmsMicrovm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

LambdamicrovmsMicrovm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdamicrovmsMicrovm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdamicrovmsMicrovm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsMicrovm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy">IdlePolicy</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId">MicrovmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt">StartedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput">EgressNetworkConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput">IdlePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput">ImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput">ImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput">IngressNetworkConnectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput">LoggingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput">MaximumDurationInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput">RunHookPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn">ImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion">ImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors">IngressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds">MaximumDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload">RunHookPayload</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `IdlePolicy`<sup>Required</sup> <a name="IdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy"></a>

```csharp
public LambdamicrovmsMicrovmIdlePolicyList IdlePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging"></a>

```csharp
public LambdamicrovmsMicrovmLoggingList Logging { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a>

---

##### `MicrovmId`<sup>Required</sup> <a name="MicrovmId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId"></a>

```csharp
public string MicrovmId { get; }
```

- *Type:* string

---

##### `StartedAt`<sup>Required</sup> <a name="StartedAt" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt"></a>

```csharp
public string StartedAt { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts"></a>

```csharp
public LambdamicrovmsMicrovmTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a>

---

##### `EgressNetworkConnectorsInput`<sup>Optional</sup> <a name="EgressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput"></a>

```csharp
public string[] EgressNetworkConnectorsInput { get; }
```

- *Type:* string[]

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `IdlePolicyInput`<sup>Optional</sup> <a name="IdlePolicyInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmIdlePolicy[] IdlePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]

---

##### `ImageArnInput`<sup>Optional</sup> <a name="ImageArnInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput"></a>

```csharp
public string ImageArnInput { get; }
```

- *Type:* string

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput"></a>

```csharp
public string ImageVersionInput { get; }
```

- *Type:* string

---

##### `IngressNetworkConnectorsInput`<sup>Optional</sup> <a name="IngressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput"></a>

```csharp
public string[] IngressNetworkConnectorsInput { get; }
```

- *Type:* string[]

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLogging[] LoggingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]

---

##### `MaximumDurationInSecondsInput`<sup>Optional</sup> <a name="MaximumDurationInSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput"></a>

```csharp
public double MaximumDurationInSecondsInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RunHookPayloadInput`<sup>Optional</sup> <a name="RunHookPayloadInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput"></a>

```csharp
public string RunHookPayloadInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors"></a>

```csharp
public string[] EgressNetworkConnectors { get; }
```

- *Type:* string[]

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn"></a>

```csharp
public string ImageArn { get; }
```

- *Type:* string

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion"></a>

```csharp
public string ImageVersion { get; }
```

- *Type:* string

---

##### `IngressNetworkConnectors`<sup>Required</sup> <a name="IngressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors"></a>

```csharp
public string[] IngressNetworkConnectors { get; }
```

- *Type:* string[]

---

##### `MaximumDurationInSeconds`<sup>Required</sup> <a name="MaximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds"></a>

```csharp
public double MaximumDurationInSeconds { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RunHookPayload`<sup>Required</sup> <a name="RunHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload"></a>

```csharp
public string RunHookPayload { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsMicrovmConfig <a name="LambdamicrovmsMicrovmConfig" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ImageArn,
    string[] EgressNetworkConnectors = null,
    string ExecutionRoleArn = null,
    IResolvable|LambdamicrovmsMicrovmIdlePolicy[] IdlePolicy = null,
    string ImageVersion = null,
    string[] IngressNetworkConnectors = null,
    IResolvable|LambdamicrovmsMicrovmLogging[] Logging = null,
    double MaximumDurationInSeconds = null,
    string Region = null,
    string RunHookPayload = null,
    LambdamicrovmsMicrovmTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn">ImageArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy">IdlePolicy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]</code> | idle_policy block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion">ImageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors">IngressNetworkConnectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging">Logging</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]</code> | logging block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds">MaximumDurationInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload">RunHookPayload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn"></a>

```csharp
public string ImageArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}.

---

##### `EgressNetworkConnectors`<sup>Optional</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors"></a>

```csharp
public string[] EgressNetworkConnectors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}.

---

##### `IdlePolicy`<sup>Optional</sup> <a name="IdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmIdlePolicy[] IdlePolicy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]

idle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#idle_policy LambdamicrovmsMicrovm#idle_policy}

---

##### `ImageVersion`<sup>Optional</sup> <a name="ImageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion"></a>

```csharp
public string ImageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}.

---

##### `IngressNetworkConnectors`<sup>Optional</sup> <a name="IngressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors"></a>

```csharp
public string[] IngressNetworkConnectors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLogging[] Logging { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#logging LambdamicrovmsMicrovm#logging}

---

##### `MaximumDurationInSeconds`<sup>Optional</sup> <a name="MaximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds"></a>

```csharp
public double MaximumDurationInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#region LambdamicrovmsMicrovm#region}

---

##### `RunHookPayload`<sup>Optional</sup> <a name="RunHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload"></a>

```csharp
public string RunHookPayload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts"></a>

```csharp
public LambdamicrovmsMicrovmTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#timeouts LambdamicrovmsMicrovm#timeouts}

---

### LambdamicrovmsMicrovmIdlePolicy <a name="LambdamicrovmsMicrovmIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmIdlePolicy {
    bool|IResolvable AutoResumeEnabled,
    double MaxIdleDurationSeconds,
    double SuspendedDurationSeconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled">AutoResumeEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds">MaxIdleDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds">SuspendedDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}. |

---

##### `AutoResumeEnabled`<sup>Required</sup> <a name="AutoResumeEnabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled"></a>

```csharp
public bool|IResolvable AutoResumeEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}.

---

##### `MaxIdleDurationSeconds`<sup>Required</sup> <a name="MaxIdleDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds"></a>

```csharp
public double MaxIdleDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}.

---

##### `SuspendedDurationSeconds`<sup>Required</sup> <a name="SuspendedDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds"></a>

```csharp
public double SuspendedDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}.

---

### LambdamicrovmsMicrovmLogging <a name="LambdamicrovmsMicrovmLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLogging {
    IResolvable|LambdamicrovmsMicrovmLoggingCloudwatch[] Cloudwatch = null,
    IResolvable|LambdamicrovmsMicrovmLoggingDisabled[] Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch">Cloudwatch</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]</code> | cloudwatch block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled">Disabled</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]</code> | disabled block. |

---

##### `Cloudwatch`<sup>Optional</sup> <a name="Cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLoggingCloudwatch[] Cloudwatch { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]

cloudwatch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#cloudwatch LambdamicrovmsMicrovm#cloudwatch}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLoggingDisabled[] Disabled { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]

disabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#disabled LambdamicrovmsMicrovm#disabled}

---

### LambdamicrovmsMicrovmLoggingCloudwatch <a name="LambdamicrovmsMicrovmLoggingCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLoggingCloudwatch {
    string LogGroup = null,
    string LogStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream">LogStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}.

---

##### `LogStream`<sup>Optional</sup> <a name="LogStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream"></a>

```csharp
public string LogStream { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}.

---

### LambdamicrovmsMicrovmLoggingDisabled <a name="LambdamicrovmsMicrovmLoggingDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLoggingDisabled {

};
```


### LambdamicrovmsMicrovmTimeouts <a name="LambdamicrovmsMicrovmTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#create LambdamicrovmsMicrovm#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#delete LambdamicrovmsMicrovm#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsMicrovmIdlePolicyList <a name="LambdamicrovmsMicrovmIdlePolicyList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmIdlePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get"></a>

```csharp
private LambdamicrovmsMicrovmIdlePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmIdlePolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>[]

---


### LambdamicrovmsMicrovmIdlePolicyOutputReference <a name="LambdamicrovmsMicrovmIdlePolicyOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmIdlePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput">AutoResumeEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput">MaxIdleDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput">SuspendedDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled">AutoResumeEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds">MaxIdleDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds">SuspendedDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoResumeEnabledInput`<sup>Optional</sup> <a name="AutoResumeEnabledInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput"></a>

```csharp
public bool|IResolvable AutoResumeEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxIdleDurationSecondsInput`<sup>Optional</sup> <a name="MaxIdleDurationSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput"></a>

```csharp
public double MaxIdleDurationSecondsInput { get; }
```

- *Type:* double

---

##### `SuspendedDurationSecondsInput`<sup>Optional</sup> <a name="SuspendedDurationSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput"></a>

```csharp
public double SuspendedDurationSecondsInput { get; }
```

- *Type:* double

---

##### `AutoResumeEnabled`<sup>Required</sup> <a name="AutoResumeEnabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled"></a>

```csharp
public bool|IResolvable AutoResumeEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxIdleDurationSeconds`<sup>Required</sup> <a name="MaxIdleDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds"></a>

```csharp
public double MaxIdleDurationSeconds { get; }
```

- *Type:* double

---

##### `SuspendedDurationSeconds`<sup>Required</sup> <a name="SuspendedDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds"></a>

```csharp
public double SuspendedDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmIdlePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>

---


### LambdamicrovmsMicrovmLoggingCloudwatchList <a name="LambdamicrovmsMicrovmLoggingCloudwatchList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLoggingCloudwatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get"></a>

```csharp
private LambdamicrovmsMicrovmLoggingCloudwatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLoggingCloudwatch[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]

---


### LambdamicrovmsMicrovmLoggingCloudwatchOutputReference <a name="LambdamicrovmsMicrovmLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLoggingCloudwatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream">ResetLogStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```

##### `ResetLogStream` <a name="ResetLogStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream"></a>

```csharp
private void ResetLogStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput">LogStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream">LogStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `LogStreamInput`<sup>Optional</sup> <a name="LogStreamInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```csharp
public string LogStreamInput { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `LogStream`<sup>Required</sup> <a name="LogStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream"></a>

```csharp
public string LogStream { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLoggingCloudwatch InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>

---


### LambdamicrovmsMicrovmLoggingDisabledList <a name="LambdamicrovmsMicrovmLoggingDisabledList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLoggingDisabledList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get"></a>

```csharp
private LambdamicrovmsMicrovmLoggingDisabledOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLoggingDisabled[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]

---


### LambdamicrovmsMicrovmLoggingDisabledOutputReference <a name="LambdamicrovmsMicrovmLoggingDisabledOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLoggingDisabledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLoggingDisabled InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>

---


### LambdamicrovmsMicrovmLoggingList <a name="LambdamicrovmsMicrovmLoggingList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get"></a>

```csharp
private LambdamicrovmsMicrovmLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLogging[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>[]

---


### LambdamicrovmsMicrovmLoggingOutputReference <a name="LambdamicrovmsMicrovmLoggingOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch">PutCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled">PutDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch">ResetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatch` <a name="PutCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch"></a>

```csharp
private void PutCloudwatch(IResolvable|LambdamicrovmsMicrovmLoggingCloudwatch[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]

---

##### `PutDisabled` <a name="PutDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled"></a>

```csharp
private void PutDisabled(IResolvable|LambdamicrovmsMicrovmLoggingDisabled[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]

---

##### `ResetCloudwatch` <a name="ResetCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch"></a>

```csharp
private void ResetCloudwatch()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled">Disabled</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput">CloudwatchInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput">DisabledInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch"></a>

```csharp
public LambdamicrovmsMicrovmLoggingCloudwatchList Cloudwatch { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled"></a>

```csharp
public LambdamicrovmsMicrovmLoggingDisabledList Disabled { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a>

---

##### `CloudwatchInput`<sup>Optional</sup> <a name="CloudwatchInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLoggingCloudwatch[] CloudwatchInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>[]

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLoggingDisabled[] DisabledInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmLogging InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>

---


### LambdamicrovmsMicrovmTimeoutsOutputReference <a name="LambdamicrovmsMicrovmTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new LambdamicrovmsMicrovmTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LambdamicrovmsMicrovmTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---



